"use server";

import { refresh } from "next/cache";
import { getID } from "../_lib/id"
import { PRODUCT_TYPE } from "../_types/types"
import { createProduct, removeProduct, updateProduct } from "../api/products"


export const createProductAction = async (prevState: any, formData: FormData) => {
    
    const userId = await getID()
    const name = formData.get("name")?.toString()
    const description = formData.get("description")?.toString()
    const price = formData.get("price")?.toString()
    const currency = formData.get("currency")?.toString()

    const product: PRODUCT_TYPE = {
        name: name!! || '',
        description: description!! || '',
        price: price!! || '',
        currency: currency!! || '',
        user: userId,
    }


    console.log("createPostAction:", formData, )

    try {
        const res = await createProduct(userId, product)
         console.log("res createProduct:", res)
         refresh()
        return {success: true, data: res}
    } catch (error) {
         console.log("Failed to create a new product:", error);
         return {error: "Failed to create a new product"}
    }

 }


 export const updateProductAction = async (prevState: any, formData: FormData) => {
    
    const userId = await getID()
    const productId = formData.get("productId")?.toString()
    const name = formData.get("name")?.toString()
    const description = formData.get("description")?.toString()
    const price = formData.get("price")?.toString()
    const currency = formData.get("currency")?.toString()

    const product: PRODUCT_TYPE = {
        name: name!! || '',
        description: description!! || '',
        price: price!! || '',
        currency: currency!! || '',
       // user: userId,
    }


    console.log("createPostAction:", formData, )

    try {
        const res = await updateProduct(productId!!, product)
         console.log("res createProduct:", res)
         refresh()
        return {success: true, data: res}
    } catch (error) {
         console.log("Failed to create a new product:", error);
         return {error: "Failed to create a new product"}
    }

 }

  export const removeProductAction = async (prevState: any, formData: FormData) => {
    
   
    const productId = formData.get("productId")?.toString()

    console.log("removeProductAction:", formData, )

    try {
        const res = await removeProduct(productId!!)
         console.log("res removeProduct:", res)
         refresh()
        return {success: true, data: res}
    } catch (error) {
         console.log("Failed to remove product:", error);
         return {error: "Failed to remove product"}
    }

 }