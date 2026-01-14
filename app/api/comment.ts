import { COMMENTTYPE } from "../_types/types";
import { callApi } from "./callApi";

const prefix = "comments";

export const createComment = async (userId: any, postId: any, comment: COMMENTTYPE) => {
    const res = await callApi(`${prefix}/post/${postId}/user/${userId}`, "POST", comment)
    console.log("res:", res.data)
    return res.data

}

export const updateComment = async (id: any, comment: COMMENTTYPE) => {
    const res = await callApi(`${prefix}/${id}`, "PATCH", comment)
    console.log("res:", res.data)
    return res.data

}

export const coutAllCommentsByPostId = async (postId: any) => {
   const response = await callApi(`${prefix}/all/count/post/${postId}`, "GET")
   console.log("response:", response.data)
   return response.data;
}

export const getCommentsByPostId = async (postId: any) => {
   const response = await callApi(`${prefix}/all/post/${postId}`, "GET")
   console.log("response:", response.data)
   return response.data;
}


export const commentLike = async (id: any, isLike: boolean) => {

    const res = await callApi(`${prefix}/like/${id}`, "PATCH", { isLike: isLike })

    console.log("res:", res.data)

    return res.data


}

export const removeComment = async (id: any) => {

    const res = await callApi(`${prefix}/${id}`, "DELETE")

    console.log("res:", res.data)

    return res.data


}