"use server";

import { refresh } from "next/cache";
import { getID } from "../_lib/id";
import { EVENT_TYPE } from "../_types/types";
import { createEventByGroup, createEventByPage, createEventByUser, joinEvent, removeEvent, updateEventById } from "../api/events";


export const createEventByUserAction = async (prevState: any, formData: FormData) => {
    const userId = await getID()
    const title = formData?.get("title")
    const description = formData?.get("description")
    console.log("removeEventAction:", formData, userId)

    const event: EVENT_TYPE = {
        title: title?.toString()!! || '',
        description: description?.toString()!! || '',
        user: userId
    }

    try {
        const res = await createEventByUser(userId, event)
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to  create event by user:", error);
        return { error: "Failed to  create event by user" }
    }

}
export const createEventByPageAction = async (prevState: any, formData: FormData) => {
    const pageId = formData.get("pageId")?.toString()
    const title = formData.get("title")?.toString()
    const description = formData.get("description")?.toString()
    console.log("removeEventAction:", formData, pageId)
    try {
        const res = await createEventByPage(pageId, { title: title || '', description: description || '' })
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to create event by page:", error);
        return { error: "Failed to  create event by page" }
    }

}
export const createEventByGroupAction = async (prevState: any, formData: FormData) => {
    const groupId = formData.get("groupId")?.toString()
    const title = formData.get("title")?.toString()
    const description = formData.get("description")?.toString()
    console.log("removeEventAction:", formData, groupId)
    try {
        const res = await createEventByGroup(groupId, { title: title || '', description: description || '' })
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to create event by group:", error);
        return { error: "Failed to create event by group" }
    }

}
export const updateEventByIdAction = async (prevState: any, formData: FormData) => {
    const eventId = formData.get("eventId")?.toString()
    console.log("updateEventByIdAction eventId:", eventId)
    const title = formData.get("title")
    const description = formData.get("description")
    console.log("removeEventAction:", formData, eventId)

    const event: EVENT_TYPE = {
        title: title?.toString()!! || '',
        description: description?.toString()!! || '',
        //_id: eventId!!
    }


    try {
        const res = await updateEventById(eventId, event)
        refresh()
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to update event:", error);
        return { error: "Failed to update event" }
    }

}
export const removeEventAction = async (prevState: any, formData: FormData) => {
    const eventId = formData.get("eventId")?.toString()
    console.log("removeEventAction:", formData, eventId)
    try {
        const res = await removeEvent(eventId)
        refresh()
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to remove event:", error);
        return { error: "Failed to remove event" }
    }

}

export const joinEventAction = async (prevState: any, formData: FormData) => {
    const eventId = formData.get("eventId")?.toString()
    const userId = await getID()
    console.log("removeEventAction:", formData, eventId)
    try {
        const res = await joinEvent(eventId, userId)
        refresh()
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to remove event:", error);
        return { error: "Failed to remove event" }
    }
}


