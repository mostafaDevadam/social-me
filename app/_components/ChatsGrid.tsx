"use client";

import React, { Suspense, useEffect, useState } from 'react'
import { ARCHIVE_TYPE, CHAT_TYPE, MESSAGE_TYPE, USERTYPE } from '../_types/types';
import { useSocket } from '../_hooks/useSocket';
import MessageOptionPopover from './MessageOptionPopover';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { toast } from 'react-toastify';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SaveMessageButton from './SaveMessageButton';
import { createArchiveByUserIdAndChatIdAndMessageIdAction, createArchiveMessageAction, getChatArchivesAction, removeMessageFromArchiveAction } from '../actions/archive.action';
import { getAllArchivesByChatId, getOneArchivebyUserId } from '../api/archive';
import RemoveArchiveMessageButton from './RemoveArchiveMessageButton';
import useSWR from 'swr';
import { useQuery } from '@tanstack/react-query';
import { useChatArchive } from '../_hooks/useChatArchive';

type ChatsGridProps = {
    chats: CHAT_TYPE[],
    userId: any
    archives?: ARCHIVE_TYPE[]
}
const ChatsGrid = ({ chats, userId, archives }: ChatsGridProps) => {
    const [chatId, setChatId] = React.useState(null);
    const [socket, isConnected] = useSocket(`${process.env.NEXT_PUBLIC_SOCKET_URL}`);

    const [messages, setMessages] = React.useState<MESSAGE_TYPE[]>([]);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [selectedMessage, setSelectedMessage] = useState<MESSAGE_TYPE | null>(null);

    const [isArchive, setIsArchive] = useState<boolean>(false);
    const [chat_archives, setChatArchives] = useState<ARCHIVE_TYPE[] | null>(null);

    //const { getAllArchives }= useChatArchive(chatId)


    useEffect(() => {
        if (!socket) return;

        socket.on("connect", () => {
            console.log("Socket connected:", socket.id);
        })

        if (chatId) {
            socket.emit('get_messages_by_chatId', [{ 'chatId': chatId }])
            socket.on('got_messages_by_chatId', (data) => {
                setMessages(JSON.parse(data));
                console.log("got_messages_by_chatId:", JSON.parse(data));
            })

            socket.on('created_message', (data) => {
                setMessages((prevMessages) => [...prevMessages, JSON.parse(data)]);
                console.log("created_message:", JSON.parse(data));
            })

            socket.on("updated_message", (data) => {
                const updatedMessages = messages.map((message) => {
                    if (message._id === JSON.parse(data)._id) {
                        return JSON.parse(data);
                    }
                    return message;
                });
                setMessages(updatedMessages);
                console.log("updated_message:", JSON.parse(data));
            })


            socket.on("removed_message", (data) => {
                const updatedMessages = messages.map((message) => {
                    if (message._id !== JSON.parse(data)._id) {
                        return JSON.parse(data);
                    }
                    return message;
                });
                setMessages(updatedMessages);
                console.log("updated_message:", JSON.parse(data));
            })
        }




        return () => {
            socket.off('got_messages_by_chatId');
            //socket.disconnect();
        }

    }, [chatId])


    const handleSendMessage = (e: any) => {
        if (e.key === 'Enter') {
            socket?.emit('create_message', { 'user': userId, 'chat': chatId, 'content': e.target.value });
            e.target.value = '';
        }
    }

    const onSelectMessage = (e: any, message: MESSAGE_TYPE) => {
        if (message) {
            setIsEdit(true);
            setSelectedMessage(message);
        }

    }

    const handleUpdateMessage = (e: any) => {
        if (e.key === 'Enter') {
            socket?.emit('update_message', { '_id': selectedMessage?._id, 'content': e.target.value });
            e.target.value = '';

            toast("Message has been updated")
        }

        setIsEdit(false);
    }

    const onHandleUpdate = (e: any) => {
        setIsEdit(false);
    }

    useEffect(() => {

        console.log("archive:", archives)

    }, [isArchive])


    const handleRemoveMessage = (e: any, messageId: any) => {
        socket?.emit('remove_message', { '_id': messageId });


        socket?.on("removed_message", (data) => {
            const updatedMessages = messages.map((message) => {
                if (message._id !== JSON.parse(data)._id) {
                    return JSON.parse(data);
                }
                return message;
            });
            setMessages(updatedMessages);
            console.log("updated_message:", JSON.parse(data));
        })



    }

    const handleClickChat = (e: any, chatId: any) => {
        setChatId(chatId)
        setSelectedMessage(null);
        // fetch archives by chatId
        /* if(chatId){
             const archives_ = getAllArchivesByChatId(chatId)
         }*/

        // const { data, error, isLoading } = useSWR(``, getAllArchivesByChatId(chatId), { suspense: true });

        //archivesQuery. refetch()
        //console.log("archivesQuery:", archivesQuery.data)

        const formData = new FormData();
        formData.append("chatId", chatId!!);
        getChatArchivesAction(null, formData)
            .then((data) => {
                console.log("data:", data)
                setChatArchives(data.data)
            })
            
    }


    return (
        <div className='flex flex-row gap-3 w-full px-2 py-2 '>
            <div className='w-1/2 '>
                {
                    chats.map((chat, index) => (
                        <div key={chat?._id} className='border rounded-md w-full px-2 py-2 mt-3' onClick={(e) => handleClickChat(e, chat?._id)}>
                            chat {index}
                            {chat?.members!!.map((member: USERTYPE, index) => member._id !== userId && <div key={index}>{member?.fullName}</div>)}
                        </div>
                    ))
                }
            </div>
            <div className='w-1/2 flex flex-col gap-5'>

                <Tabs defaultValue="chat" className="w-[400px]">
                    <TabsList>
                        <TabsTrigger value="chat">Chat</TabsTrigger>
                        <TabsTrigger value="archive" onClick={(e) => setIsArchive(true)}>Archive</TabsTrigger>
                    </TabsList>
                    <TabsContent value="chat">
                        {
                            messages.map((message, index) => <div key={index} className='border rounded-md mt-3 px-2 py-2'>
                                {message?.user?._id !== userId && (
                                    <div className='flex flex-col justify-start text-start '>

                                        <div className='flex flex-row justify-between'>
                                            <p className=' text-start'>{message?.content}</p>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <button ><BiDotsVerticalRounded className='text-2xl' /></button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-40">
                                                    <div className="grid gap-4">
                                                        <div className="space-y-2 flex flex-col gap-2 ">
                                                            <button className='text-start' onClick={(e) => onSelectMessage(e, message)}>Edit</button>
                                                            <SaveMessageButton action={createArchiveByUserIdAndChatIdAndMessageIdAction} messageId={message?._id} chatId={chatId} />
                                                            <button className='text-start' onClick={(e) => handleRemoveMessage(e, message?._id)}>Remove</button>
                                                        </div>

                                                    </div>
                                                </PopoverContent>
                                            </Popover>
                                        </div>
                                        <p className=' text-start text-sm text-gray-500'>{message?.user?.fullName}</p>

                                    </div>
                                )}
                                {message?.user?._id === userId && (
                                    <div className='flex flex-col justify-end text-end '>

                                        <div className='flex flex-row justify-between'>

                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <button ><BiDotsVerticalRounded className='text-2xl' /></button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-40">
                                                    <div className="grid gap-4">
                                                        <div className="space-y-2 flex flex-col gap-3">
                                                            <button className='text-start' onClick={(e) => onSelectMessage(e, message)}>Edit</button>
                                                            <SaveMessageButton action={createArchiveByUserIdAndChatIdAndMessageIdAction} messageId={message?._id} chatId={chatId} />
                                                            <button className='text-start' onClick={(e) => handleRemoveMessage(e, message?._id)}>Remove</button>
                                                        </div>
                                                        <div className="space-y-2">

                                                        </div>

                                                    </div>
                                                </PopoverContent>
                                            </Popover>

                                            <span className=' text-end'>{message?.content}</span>
                                        </div>
                                        <p className=' text-end text-sm text-gray-500'>You</p>
                                    </div>
                                )}

                            </div>)
                        }

                        <div className='w-full flex flex-row gap-2 mt-5'>
                            <input type="text" className='w-full border rounded-md px-2 py-2' onKeyPress={handleSendMessage} defaultValue={selectedMessage?.content} />
                            {isEdit ?
                                <button className='border rounded-md bg-sky-500 text-white px-2 py-1' onClick={handleUpdateMessage}>Update</button>
                                : <button className='border rounded-md bg-sky-500 text-white px-2 py-1'>Send</button>
                            }
                        </div>
                    </TabsContent>
                    <TabsContent value="archive">
                        <Suspense fallback={<div>Loading...</div>}>
                        {
                           chat_archives &&chat_archives.map( (m) => <div key={m?._id} className=' rounded-md mt-3 px-2 py-2'>
                                  <div className='border rounded-md mt-3 px-2 py-2'>
                                        <div className='flex flex-col justify-start text-start '>
                                            <div className='flex flex-row justify-between'>
                                                <p className=' text-start'>{m?.message?.content}</p>
                                                <RemoveArchiveMessageButton action={removeMessageFromArchiveAction} archiveId={m?._id} messageId={m?.message?._id} />
                                            </div>
                                        </div>
                                   
                                   </div>
                                
                                </div>)
                        

                            /*
                                archive?.isMessage && archive?.messages?.map((message, index) => <div key={index} className='border rounded-md mt-3 px-2 py-2'>
                                    {message?.user?._id !== userId && (
                                        <div className='flex flex-col justify-start text-start '>
                                            <div className='flex flex-row justify-between'>
                                                <p className=' text-start'>{message?.content}</p>
                                                <RemoveArchiveMessageButton action={removeMessageFromArchiveAction} archiveId={archive?._id} messageId={message?._id} />
                                            </div>
                                        </div>
                                    )}
                                </div>
                                )*/
                        }
                        </Suspense>
                    </TabsContent>
                </Tabs>



            </div>
        </div>
    )
}

export default ChatsGrid