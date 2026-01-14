"use server";

import { refresh } from "next/cache";
import { createShareByUserAndPost, removeShareById } from "../api/shares"



export const createShareByUserAndPostAction = async (prevState: any, formData: FormData) => {
    const postId = formData.get("postId")?.toString()
    const content = formData.get("content")?.toString()

     try {
           const res = await createShareByUserAndPost(postId!!, content!! || '')
            console.log("res createShareByUserAndPost:", res)
           return {success: true, data: res}
       } catch (error) {
            console.log("Failed to create sharing:", error);
            return {error: "Failed to create sharing"}
       }

       

}
export const removeShareByIdAction = async (prevState: any, formData: FormData) => {
    const shareId = formData.get("shareId")?.toString()
    try {
           const res = await removeShareById(shareId!!)
            console.log("res removeOneShareById:", res)
            refresh()
           return {success: true, data: res}
       } catch (error) {
            console.log("Failed to remove sharing:", error);
            return {error: "Failed to remove sharing"}
       }
       
       
       
}