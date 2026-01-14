"use server";

import { refresh } from "next/cache";
import { getID } from "../_lib/id";
import { createPage, joinPage, removePage, updatePage } from "../api/pages";


export const createPageAction = async (prevState: any, formData: FormData) => {
        const userId = await getID()
       
        const name = formData.get("name")?.toString()
        const description = formData.get("description")?.toString()
    
        console.log("createPageAction:", formData, userId)
    
        try {
            const res = await createPage({ user: userId, name:name || '', description: description || ''})
            console.log("res createPage:", res)
            return { success: true, data: res }
        } catch (error) {
            console.log("Failed to create page:", error);
            return { error: "Failed to create page" }
        }
    
}

export const updatePageAction = async (prevState: any, formData: FormData) => {

        const pageId = formData.get("pageId")
        const name = formData.get("name")?.toString()
        const description = formData.get("description")?.toString()
    
        console.log("updatePageAction:", formData, pageId)
    
        try {
            const res = await updatePage(pageId, { name:name || '', description: description || ''})
            console.log("res updatePage:", res)
            return { success: true, data: res }
        } catch (error) {
            console.log("Failed to update page:", error);
            return { error: "Failed to update page" }
        }
    
}

export const joinPageAction = async (prevState: any, formData: FormData) => { 

    const pageId = formData.get("pageId")
    const userId = await getID()
    
    console.log("joinPageAction:", formData, pageId, userId)
    
    try {
        const res = await joinPage(pageId, userId)
        console.log("res joinPage:", res)
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to join page:", error);
        return { error: "Failed to join page" }
    }
}

export const removePageAction = async (prevState: any, formData: FormData) => { 

    const pageId = formData.get("pageId")
    
    
    console.log("removeGroupAction:", formData, pageId)
    
    try {
        const res = await removePage(pageId)
        console.log("res removePage:", res)
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to remove Page:", error);
        return { error: "Failed to remove Page" }
    }

    refresh()
}