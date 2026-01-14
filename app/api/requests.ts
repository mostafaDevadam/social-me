import { getID } from "../_lib/id"
import { callApi } from "./callApi"


const prefix = "requests"


export const getAllRequestsBySenderId = async () => {
    const userId = await getID()
    const response = await callApi(`${prefix}/sender/${userId}`, "GET")
    console.log("response:", response.data)
    return response.data
}


export const getAllRequestsByReceiverId = async () => {
    const userId = await getID()
    const response = await callApi(`${prefix}/receiver/${userId}`, "GET")
    console.log("response:", response.data)
    return response.data
}

export const sendRequestforFriend = async (receiverId: any) => {
     const userId = await getID()
    const response = await callApi(`${prefix}/send`, "POST", {sender: userId, receiver: receiverId})
    console.log("response:", response.data)
    return response.data
}

export const confirmRequestFriend = async (requestId: any, isConfirm: boolean) => {
     const response = await callApi(`${prefix}/confirm/${requestId}`, "PATCH", {isConfirm})
    console.log("response:", response.data)
    return response.data
}

export const cancelRequestFriend = async (requestId: any, isCancel: boolean) => {
     const response = await callApi(`${prefix}/cancel/${requestId}`, "PATCH", {isCancel})
    console.log("response:", response.data)
    return response.data
}

export const removeRequest = async (requestId: any) => {
     const response = await callApi(`${prefix}/${requestId}`, "DELETE")
    console.log("response:", response.data)
    return response.data
}

