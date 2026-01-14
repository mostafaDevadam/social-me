"use client";
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import React from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi';

const MessageOptionPopover = () => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <button ><BiDotsVerticalRounded className='text-2xl' /></button>
            </PopoverTrigger>
            <PopoverContent className="w-40">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <button>Edit</button>
                    </div>

                </div>
            </PopoverContent>
        </Popover>
    )
}

export default MessageOptionPopover