"use server";

import { cancelRequestFriend, confirmRequestFriend, removeRequest, sendRequestforFriend } from "../api/requests";


export const sendRequestFriendAction = async (prevState: any, formData: FormData) => {
    const receiverId = formData.get("receiverId")

    console.log("createPostAction:", formData, receiverId)

    try {
        const res = await sendRequestforFriend(receiverId?.toString() || '')
         console.log("res sendRequestforFriend:", res)
        return {success: true, data: res}
    } catch (error) {
         console.log("Failed to send request to friend:", error);
         return {error: "Failed to send request to friend"}
    }

 }

 export const confirmRequestFriendAction = async (prevState: any, formData: FormData) => {
    const receiverId = formData.get("requestId")
    const isConfirm = formData.get("isConfirm")

    console.log("createPostAction:", formData, receiverId)

    try {
        const res = await confirmRequestFriend(receiverId?.toString() || '', Boolean(isConfirm))
         console.log("res confirmRequestFriend:", res)
        return {success: true, data: res}
    } catch (error) {
         console.log("Failed to send confirm to friend:", error);
         return {error: "Failed to send request to friend"}
    }

 }

 export const cancelRequestFriendAction = async (prevState: any, formData: FormData) => {
    const receiverId = formData.get("requestId")
    const isCancel = formData.get("isCancel")

    console.log("createPostAction:", formData, receiverId)

    try {
        const res = await cancelRequestFriend(receiverId?.toString() || '', Boolean(isCancel))
         console.log("res cancelRequestFriend:", res)
        return {success: true, data: res}
    } catch (error) {
         console.log("Failed to cancel request to friend:", error);
         return {error: "Failed to cancel request to friend"}
    }

 }

 export const removeRequestFriendAction = async (prevState: any, formData: FormData) => {
    const requestId = formData.get("requestId")
    console.log("createPostAction:", formData, requestId)
    try {
        const res = await removeRequest(requestId?.toString() || '')
         console.log("res removeRequest:", res)
        return {success: true, data: res}
    } catch (error) {
         console.log("Failed to remove request  friend:", error);
         return {error: "Failed to remove request friend"}
    }
 }