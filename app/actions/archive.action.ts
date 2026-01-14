"use server";

import { refresh } from "next/cache";
import { getID } from "../_lib/id";
import { createArchiveByUserId, createArchiveByUserIdAndChatIdAndMessageId, createArchiveByUserIdAndMessageId, getAllArchivesByChatId, removeArchiveByIdAndMessage, removeMessageFromArchive, removePostFromArchive } from "../api/archive";


export const createArchiveAction = async (prevState: any, formData: FormData) => {

    const postId = formData.get("postId")?.toString()

    try {
        const res = await createArchiveByUserId(postId!!)
        console.log("res createArchiveByUserId:", res)
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to save post in archive:", error);
        return { error: "Failed to save post in archive" }
    }

}

export const createArchiveByUserIdAndChatIdAndMessageIdAction = async (prevState: any, formData: FormData) => {

    const messageId = formData.get("messageId")?.toString()
    const chatId = formData.get("chatId")?.toString()

    console.log("createArchiveByUserIdAndChatIdAndMessageIdAction: ", formData)

    try {
        const res = await createArchiveByUserIdAndChatIdAndMessageId(chatId!!, messageId!!)
        console.log("res createArchiveByUserIdAndChatIdAndMessageId:", res)
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to save message in archive:", error);
        return { error: "Failed to save message in archive" }
    }
}

export const createArchiveMessageAction = async (prevState: any, formData: FormData) => {

    const messageId = formData.get("messageId")?.toString()

    try {
        const res = await createArchiveByUserIdAndMessageId(messageId!!)
        console.log("res createArchiveByUserIdAndMessageId:", res)
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to save message in archive:", error);
        return { error: "Failed to save message in archive" }
    }

}

export const removePostFromArchiveAction = async (prevState: any, formData: FormData) => {
    const archiveId = formData.get("archiveId")?.toString()
    const postId = formData.get("postId")?.toString()

    try {
        const res = await removePostFromArchive(archiveId!!, postId!!)
        console.log("res removePostFromArchive:", res)
         refresh()
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to remove post from archive:", error);
        return { error: "Failed to remove post from archive" }
    }
}

export const removeMessageFromArchiveAction = async (prevState: any, formData: FormData) => {
    const archiveId = formData.get("archiveId")?.toString()
    const messageId = formData.get("messageId")?.toString()

    try {
        const res = await removeMessageFromArchive(archiveId!!, messageId!!)
        console.log("res removeMessageFromArchive:", res)
         refresh()
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to remove message from archive:", error);
        return { error: "Failed to remove message from archive" }
    }
}

export const removeArchiveByIdAndMessageAction = async (prevState: any, formData: FormData) => {
    const archiveId = formData.get("archiveId")?.toString()
    const messageId = formData.get("messageId")?.toString()
      try {
        const res = await removeArchiveByIdAndMessage(archiveId!!, messageId!!)
        console.log("res removeArchiveByMessage:", res)
         refresh()
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to remove message archive:", error);
        return { error: "Failed to remove message  archive" }
    }
}

export const getChatArchivesAction = async (prevState: any, formData: FormData) => {
    
    const chatId = formData.get("chatId")?.toString()
    console.log("getChatArchives:", formData)
    try {
        const res = await getAllArchivesByChatId(chatId!!)
        console.log("res getAllArchivesByChatId:", res)
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to get chat archives:", error);
        return { error: "Failed to get chat archives" }
    }
}