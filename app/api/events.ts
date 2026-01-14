"use server";

import { getID } from "../_lib/id"
import { EVENT_TYPE } from "../_types/types";
import { callApi } from "./callApi"


const prefix = "events"


export const createEventByUser = async (userId: any, event: EVENT_TYPE) => {
    const res = await callApi(`${prefix}/user/${userId}`, "POST", event)
    console.log("res:", res.data)
    return res.data

}
export const createEventByPage = async (pageId: any, event: EVENT_TYPE) => {
    const res = await callApi(`${prefix}/page/${pageId}`, "POST", event)
    console.log("res:", res.data)
    return res.data


}
export const createEventByGroup = async (groupId: any, event: EVENT_TYPE) => {
    const res = await callApi(`${prefix}/page/${groupId}`, "POST", event)
    console.log("res:", res.data)
    return res.data
}

export const getAllEvents = async () => {
    const res = await callApi(`${prefix}/all`, "GET")
    console.log("res:", res.data)
    return res.data
}

export const getAllEventsByUser = async () => {
    const userId = await getID()
    const res = await callApi(`${prefix}/all/user/${userId}`, "GET")
    console.log("res:", res.data)
    return res.data
}

export const getAllEventsByPage = async (pageId: any) => {
    const res = await callApi(`${prefix}/all/page/${pageId}`, "GET")
    console.log("res:", res.data)
    return res.data
}

export const getAllEventsByGroup = async (groupId: any) => {
    const res = await callApi(`${prefix}/all/group/${groupId}`, "GET")
    console.log("res:", res.data)
    return res.data
}

export const getEventById = async (id: any) => {
    const res = await callApi(`${prefix}/${id}`, "GET")
    console.log("res:", res.data)
    return res.data
}

export const updateEventById = async (id: any, event: EVENT_TYPE) => {
    console.log("updateEventById event:", id, event)
    const res = await callApi(`${prefix}/${id}`, "PATCH", event)
    console.log("res:", res.data)
    return res.data

}


export const removeEvent = async (id: any) => {
    const res = await callApi(`${prefix}/${id}`, "DELETE")
    console.log("res:", res.data)
    return res.data
}

export const joinEvent = async (eventId: any, member: any) => {
    const response = await callApi(`${prefix}/join/${eventId}`, "PATCH", { member: member })
    console.log("response:", response.data)
    return response.data
}