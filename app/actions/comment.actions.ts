"use server";

import { getID } from "../_lib/id";
import { commentLike, createComment, removeComment, updateComment } from "../api/comment"

export const createCommentAction = async (prevState: any, formData: FormData) => {
    const userId = await getID()
    const content = formData.get("content")
    const postId = formData.get("postId")

    console.log("createCommentAction:", formData, userId, content)

    try {
        const res = await createComment(userId, postId, {content: content?.toString() || ''})
        console.log("res createComment:", res)
        return {success: true, data: res}
    } catch (error) {
        console.log("Failed to create comment:", error);
         return {error: "Failed to create comment"}
    }

}

export const updateCommentAction = async (prevState: any, formData: FormData) => {
    //const userId = await getID()
    const content = formData.get("content")
    const commentId = formData.get("commentId")

    console.log("updateCommentAction:", formData, commentId, content)

    try {
        const res = await updateComment(commentId, {content: content?.toString() || ''})
        console.log("res updateComment:", res)
        return {success: true, data: res}
    } catch (error) {
        console.log("Failed to update comment:", error);
         return {error: "Failed to update comment"}
    }

}

export const removeCommentActions = async (prevState: any, formData: FormData) => {
    
    const commentId = formData.get("commentId")

    console.log("removeCommentActions:", formData, commentId)

    try {
        const res = await removeComment(commentId)
        console.log("res removeComment:", res)
        return {success: true, data: res}
    } catch (error) {
        console.log("Failed to remove comment:", error);
         return {error: "Failed to remove comment"}
    }
}


export const commentLikeAction = async (formData: FormData) => {
   
    //const userId = await getID()
    const commentId = formData.get("commentId")?.toString()
    const isLike = formData.get("isLike")

     console.log("commentLikeAction:", formData, Boolean(isLike))

    try {
        const res = await commentLike(commentId, Boolean(isLike))
        //return res
        return {success: true, data: res}
    } catch (error) {
        console.log("Failed to comment like:", error);
        return {error: "Failed to comment like"}
    }

}