"use server"

import { getID } from "../_lib/id"
import { addPostIntoCollection, createCollectionByUserId, removeCollection, removePostFromCollection, updateCollection } from "../api/collections"


export const createCollectionByUserIdAction = async (prevState: any, formData: FormData) => {
    const userId = await getID()
    const name = formData.get("name")?.toString()
    const description = formData.get("description")?.toString()

    console.log('createCollectionByUserIdAction:', formData, userId)

    try {
            const res = await createCollectionByUserId(userId, { name:name || '', description: description || ''})
            console.log("res createCollectionByUserId:", res)
            return { success: true, data: res }
        } catch (error) {
            console.log("Failed to create collection:", error);
            return { error: "Failed to create collection" }
        }
}
export const addPostIntoCollectionAction = async (prevState: any, formData: FormData) => {
    const collectionId = formData.get("collectionId")?.toString()
    const postId = formData.get("postId")?.toString()

    console.log('addPostIntoCollectionAction:', formData, collectionId, postId)

     try {
            const res = await addPostIntoCollection(collectionId!!, postId!!)
            console.log("res addPostIntoCollection:", res)
            return { success: true, data: res }
        } catch (error) {
            console.log("Failed to add post into collection:", error);
            return { error: "Failed to add post into collection" }
        }

}
export const removePostFromCollectionAction = async (prevState: any, formData: FormData) => {
     const collectionId = formData.get("collectionId")?.toString()
    const postId = formData.get("postId")?.toString()

    console.log('removePostFromCollectionAction:', formData, collectionId, postId)

      try {
            const res = await removePostFromCollection(collectionId!!, postId!!)
            console.log("res removePostFromCollection:", res)
            return { success: true, data: res }
        } catch (error) {
            console.log("Failed to remove post from collection:", error);
            return { error: "Failed to remove post from collection" }
        }

}
export const updateCollectionAction = async (prevState: any, formData: FormData) => {
    const collectionId = formData.get("collectionId")?.toString()
    const name = formData.get("name")?.toString()
    const description = formData.get("description")?.toString()

    console.log('updateCollectionAction:', formData, collectionId)

      try {
            const res = await updateCollection(collectionId!!, { name:name || '', description: description || ''})
            console.log("res updateCollection:", res)
            return { success: true, data: res }
        } catch (error) {
            console.log("Failed to update collection:", error);
            return { error: "Failed to update collection" }
        }

}
export const removeCollectionAction = async (prevState: any, formData: FormData) => {
    const collectionId = formData.get("collectionId")?.toString()

    console.log('removeCollectionAction:', formData, collectionId)

     try {
            const res = await removeCollection(collectionId!!)
            console.log("res removeCollection:", res)
            return { success: true, data: res }
        } catch (error) {
            console.log("Failed to remove collection:", error);
            return { error: "Failed to remove collection" }
        }

}