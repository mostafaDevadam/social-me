import { COLLECTION_TYPE } from "../_types/types"
import { callApi } from "./callApi"

const prefix = "collections"


export const createCollectionByUserId = async (userId: any, collection: COLLECTION_TYPE) => {
    const res = await callApi(`${prefix}/user/${userId}`, "POST", collection)
    console.log("res:", res.data)
    return res.data
}
export const getAllCollectionsByUserId = async (userId: any) => {
    const res = await callApi(`${prefix}/all/user/${userId}`, "GET")
    console.log("res:", res.data)
    return res.data
}

export const getCollectionById = async (id: any) => {
    const res = await callApi(`${prefix}/${id}`, "GET")
    console.log("res:", res.data)
    return res.data
}

export const addPostIntoCollection = async (collectionId: any, postId: any) => {
    const res = await callApi(`${prefix}/${collectionId}/add/post/${postId}`, "PATCH")
    console.log("res:", res.data)
    return res.data
}

export const removePostFromCollection = async (collectionId: any, postId: any) => {
    const res = await callApi(`${prefix}/${collectionId}/remove/post/${postId}`, "PATCH")
    console.log("res:", res.data)
    return res.data
}

export const updateCollection = async (id: any, collection: COLLECTION_TYPE) => {
    const res = await callApi(`${prefix}/${id}`, "PATCH", collection)
    console.log("res:", res.data)
    return res.data
}

export const removeCollection = async (id: any) => {
    const res = await callApi(`${prefix}/${id}`, "DELETE")
    console.log("res:", res.data)
    return res.data
}

