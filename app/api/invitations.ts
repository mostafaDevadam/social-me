import { getID } from "../_lib/id"
import { INVITATION_TYPE } from "../_types/types"
import { callApi } from "./callApi"

const prefix ="invitations"

export const createInvitationEvent = async ( eventId: any, invitation: INVITATION_TYPE) => {
    console.log("createInvitationEvent:", eventId, invitation)
   const response = await callApi(`${prefix}/event/${eventId}`, "POST", invitation)
    console.log("response:", response.data)
    return response.data
}

export const createInvitationPage = async ( pageId: any, invitation: INVITATION_TYPE) => {
    console.log("createInvitationPage:", pageId, invitation)
   const response = await callApi(`${prefix}/page/${pageId}`, "POST", invitation)
    console.log("response:", response.data)
    return response.data
}

export const createInvitationGroup = async ( groupId: any, invitation: INVITATION_TYPE) => {
    console.log("createInvitationGroup:", groupId, invitation)
   const response = await callApi(`${prefix}/group/${groupId}`, "POST", invitation)
    console.log("response:", response.data)
    return response.data
}


export const confirmInviationEvent = async( invitationId: string, isConfirmed: boolean ) => {
    const response = await callApi(`${prefix}/${invitationId}/confirm/event`, "PATCH", { isConfirmed: isConfirmed })
    console.log("response:", response.data)
    return response.data
}

export const confirmInviationPage = async( invitationId: string, isConfirmed: boolean ) => {
    const response = await callApi(`${prefix}/${invitationId}/confirm/page`, "PATCH", { isConfirmed: isConfirmed })
    console.log("response:", response.data)
    return response.data
}

export const confirmInviationGroup = async( invitationId: string, isConfirmed: boolean ) => {
    const response = await callApi(`${prefix}/${invitationId}/confirm/group`, "PATCH", { isConfirmed: isConfirmed })
    console.log("response:", response.data)
    return response.data
}

export const getAllInvitationsBySenderId = async ( ) => {
    const userId = await getID()
    const response = await callApi(`${prefix}/all/sender/${userId}`, "GET")
    console.log("response:", response.data)
    return response.data
}

export const getAllInvitationsByReceiverId = async () => {
    const userId = await getID()
    const response = await callApi(`${prefix}/all/receiver/${userId}`, "GET")
    console.log("response:", response.data)
    return response.data
}

export const getAllInvitationsByEventId = async ( eventId: any ) => {
    const response = await callApi(`${prefix}/all/event/${eventId}`, "GET")
    console.log("response:", response.data)
    return response.data
}

export const getAllInvitationsByPageId = async ( pageId: any ) => {
    const response = await callApi(`${prefix}/all/page/${pageId}`, "GET")
    console.log("response:", response.data)
    return response.data
}

export const getAllInvitationsByGroupId = async ( groupId: any ) => {
    const response = await callApi(`${prefix}/all/group/${groupId}`, "GET")
    console.log("response:", response.data)
    return response.data
}

export const updateInviation = async ( invitationId: any, invitation: INVITATION_TYPE ) => {
    const response = await callApi(`${prefix}/${invitationId}`, "PATCH", invitation)
    console.log("response:", response.data)
    return response.data
}

export const removeInvitation = async ( invitationId: any ) => {
    const response = await callApi(`${prefix}/${invitationId}`, "DELETE")
    console.log("response:", response.data)
    return response.data
}

