"use server";

import { getID } from "../_lib/id";
import { createPost, createPostInGroup, createPostInPage, postLike, removePost, updatePost } from "../api/post";

export const createPostAction = async (prevState: any, formData: FormData) => {
    const userId = await getID()
    const content = formData.get("content")

    console.log("createPostAction:", formData, userId, content)

    try {
        const res = await createPost(userId, { content: content?.toString() || '' })
        console.log("res createPost:", res)
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to create post:", error);
        return { error: "Failed to create post" }
    }

}

export const createPostInPageAction = async (prevState: any, formData: FormData) => {
    const userId = await getID()
    const pageId = formData.get("pageId")
    const content = formData.get("content")

     try {
        const res = await createPostInPage(userId,pageId, { content: content?.toString() || '' })
        console.log("res createPostInPage:", res)
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to create post in page:", error);
        return { error: "Failed to create post in page" }
    }

}

export const createPostInGroupAction = async (prevState: any, formData: FormData) => {
    const userId = await getID()
    const groupId = formData.get("groupId")
    const content = formData.get("content")

      try {
        const res = await createPostInGroup(userId,groupId, { content: content?.toString() || '' })
        console.log("res createPostInGroup:", res)
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to create post in group:", error);
        return { error: "Failed to create post in group" }
    }

}


export const createPostInEventAction = async (prevState: any, formData: FormData) => {
    const userId = await getID()
    const eventId = formData.get("eventId")
    const content = formData.get("content")

      try {
        const res = await createPostInGroup(userId,eventId, { content: content?.toString() || '' })
        console.log("res createPostInGroup:", res)
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to create post in group:", error);
        return { error: "Failed to create post in group" }
    }

}

export const updatePostAction = async (prevState: any, formData: FormData) => {
    //const userId = await getID()
    const content = formData.get("content")
    const postId = formData.get("postId")

    console.log("updatePostAction:", formData, postId, content)

    try {
        const res = await updatePost(postId, { content: content?.toString() || '' })
        console.log("res updatePost:", res)
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to update post:", error);
        return { error: "Failed to update post" }
    }

}

export const postLikeAction = async (formData: FormData) => {

    //const userId = await getID()
    const postId = formData.get("postId")
    const isLike = formData.get("isLike")

    console.log("createPostAction:", formData, Boolean(isLike))

    try {
        const res = await postLike(postId, Boolean(isLike))
        //return res
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to create post:", error);
        return { error: "Failed to post like" }
    }

}


export const removePostAction = async (prevState: any, formData: FormData) => {

    const postId = formData.get("postId")

    console.log("removeCommentActions:", formData, postId)

    try {
        const res = await removePost(postId)
        console.log("res removePost:", res)
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to remove post:", error);
        return { error: "Failed to remove post" }
    }
}