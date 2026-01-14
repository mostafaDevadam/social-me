"use server";

import { refresh } from "next/cache";
import { getID } from "../_lib/id";
import { confirmInviationEvent, confirmInviationGroup, confirmInviationPage, createInvitationEvent, createInvitationGroup, createInvitationPage, removeInvitation, updateInviation } from "../api/invitations";


export const createInvivationEventAction = async (prevState: any, formData: FormData) => {
    const userId = await getID()
    const event = formData.get("eventId")?.toString()
    const message = formData.get("message")?.toString()
    //const sender = formData.get("senderId")?.toString()
    const receiver = formData.get("receiverId")?.toString()

    console.log("createInvivationEventAction:", formData, userId)

   try {
        const res = await createInvitationEvent(event!!, { message: message!! || '', sender: userId, receiver: receiver!! || '' })
        console.log("res createInvitationEvent:", res)
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to create Invitation Event:", error);
        return { error: "Failed to create Invitation Event" }
    }

}


export const createInvivationPageAction = async (prevState: any, formData: FormData) => {
    const userId = await getID()
    const page = formData.get("pageId")?.toString()
    const message = formData.get("message")?.toString()
    //const sender = formData.get("senderId")?.toString()
    const receiver = formData.get("receiverId")?.toString()

    console.log("createInvivationPageAction:", formData, userId)

   try {
        const res = await createInvitationPage(page!!, { message: message!! || '', sender: userId, receiver: receiver!! || '' })
        console.log("res createInvitationPage:", res)
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to create Invitation Page:", error);
        return { error: "Failed to create Invitation Page" }
    }

}

export const createInvivationGroupAction = async (prevState: any, formData: FormData) => {
    const userId = await getID()
    const group = formData.get("groupId")?.toString()
    const message = formData.get("message")?.toString()
    //const sender = formData.get("senderId")?.toString()
    const receiver = formData.get("receiverId")?.toString()

    console.log("createInvivationPageAction:", formData, userId)

   try {
        const res = await createInvitationGroup(group!!, { message: message!! || '', sender: userId, receiver: receiver!! || '' })
        console.log("res createInvitationPage:", res)
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to create Invitation Page:", error);
        return { error: "Failed to create Invitation Page" }
    }

}

export const confirmInviationEventAction = async (prevState: any, formData: FormData) => {
   
    const invitationId = formData.get("invitationId")?.toString()
    const isConfirmed = formData.get("isConfirmed")?.toString()
    

    console.log("confirmInviationEventAction:", formData)

    try {
        const res = await confirmInviationEvent(invitationId!!, Boolean(isConfirmed!!))
        console.log("res confirmInviationEvent:", res)
        refresh()
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to confirm Inviation Event:", error);
        return { error: "Failed to confirm Inviation Event" }
    }
    
}

export const confirmInviationPageAction = async (prevState: any, formData: FormData) => {
   
    const invitationId = formData.get("invitationId")?.toString()
    const isConfirmed = formData.get("isConfirmed")?.toString()
    

    console.log("confirmInviationPageAction:", formData)

    try {
        const res = await confirmInviationPage(invitationId!!, Boolean(isConfirmed!!))
        console.log("res confirmInviationPage:", res)
        refresh()
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to confirm Inviation page:", error);
        return { error: "Failed to confirm Inviation page" }
    }
    
}


export const confirmInviationGroupAction = async (prevState: any, formData: FormData) => {
   
    const invitationId = formData.get("invitationId")?.toString()
    const isConfirmed = formData.get("isConfirmed")?.toString()
    

    console.log("confirmInviationGroupAction:", formData)

    try {
        const res = await confirmInviationGroup(invitationId!!, Boolean(isConfirmed!!))
        console.log("res confirmInviationGroup:", res)
        refresh()
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to confirm Inviation group:", error);
        return { error: "Failed to confirm Inviation group" }
    }
    
}
export const updateInviationAction = async (prevState: any, formData: FormData) => {
    const invitationId = formData.get("invitationId")?.toString()
    const message = formData.get("message")?.toString()
    console.log("updateInviationAction:", formData, invitationId)

     try {
        const res = await updateInviation(invitationId!!, {message: message!! || ''})
        console.log("res updateInviation:", res)
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to update Inviation :", error);
        return { error: "Failed to update Inviation" }
    }
}


export const removeInvitationAction = async (prevState: any, formData: FormData) => {
     const invitationId = formData.get("invitationId")?.toString()
   
    console.log("removeInvitationAction:", formData, invitationId)

     try {
        const res = await removeInvitation(invitationId!!)
        console.log("res removeInvitation:", res)
        refresh()
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to remove Inviation :", error);
        return { error: "Failed to remove Inviation" }
    }
} 