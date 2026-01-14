"use server";

import { refresh } from "next/cache";
import { getID } from "../_lib/id";
import { createGroup, joinGroup, removeGroup, updateGroup } from "../api/group";
import { createPage, joinPage, updatePage } from "../api/pages";


export const createGroupAction = async (prevState: any, formData: FormData) => {
        const userId = await getID()
       
        const name = formData.get("name")?.toString()
        const description = formData.get("description")?.toString()
    
        console.log("createPageAction:", formData, userId)
    
        try {
            const res = await createGroup({ user: userId, name:name || '', description: description || ''})
            console.log("res createPage:", res)
            return { success: true, data: res }
        } catch (error) {
            console.log("Failed to create page:", error);
            return { error: "Failed to create page" }
        }
    
}

export const updateGroupAction = async (prevState: any, formData: FormData) => {

        const groupId = formData.get("groupId")
        const name = formData.get("name")?.toString()
        const description = formData.get("description")?.toString()
    
        console.log("updatePageAction:", formData, groupId)
    
        try {
            const res = await updateGroup(groupId, { name:name || '', description: description || ''})
            console.log("res updatePage:", res)
            return { success: true, data: res }
        } catch (error) {
            console.log("Failed to update page:", error);
            return { error: "Failed to update page" }
        }
    
}

export const joinGroupAction = async (prevState: any, formData: FormData) => { 

    const groupId = formData.get("groupId")
    const userId = await getID()
    
    console.log("joinPageAction:", formData, groupId, userId)
    
    try {
        const res = await joinGroup(groupId, userId)
        console.log("res joinGroup:", res)
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to join group:", error);
        return { error: "Failed to join group" }
    }
}


export const removeGroupAction = async (prevState: any, formData: FormData) => { 

    const groupId = formData.get("groupId")
    
    
    console.log("removeGroupAction:", formData, groupId)
    
    try {
        const res = await removeGroup(groupId)
        console.log("res removeGroup:", res)
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to remove group:", error);
        return { error: "Failed to remove group" }
    }

    refresh()
}


