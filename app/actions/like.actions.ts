"use server";

import { revalidatePath } from "next/cache"
import { getID } from "../_lib/id"
import { likePost } from "../api/likes"


export const likePostAction = async (formData: FormData) => {
    const postId = formData.get("postId")
    const userId = await getID()
    console.log({ postId, userId })
    try {
       const res = await likePost(postId, userId, true)
       console.log("res:", res)
        revalidatePath("/")
        return { success: true }
    } catch (error) {
        console.log("likePostAction Error:", error)
        return { error: "failed to like post!" }
    }
}