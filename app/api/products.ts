import { PRODUCT_TYPE } from "../_types/types"
import { callApi } from "./callApi"

const prefix = "products"
export const createProduct = async (userId: any, product: PRODUCT_TYPE) => {
    const res = await callApi(`${prefix}/user/${userId}`, "POST", product)
    console.log("res:", res.data)
    return res.data
}

export const getAllProducts = async () => {
    const res = await callApi(`${prefix}/all`, "GET")
    console.log("res:", res.data)
    return res.data
}

export const getAllProductsByUserId = async (userId: any) => {
    const res = await callApi(`${prefix}/all/user/${userId}`, "GET")
    console.log("res:", res.data)
    return res.data
}

export const getProductById = async (id: any) => {
    const res = await callApi(`${prefix}/${id}`, "GET")
    console.log("res:", res.data)
    return res.data
}

export const updateProduct = async (id: any, product: PRODUCT_TYPE) => {
    const res = await callApi(`${prefix}/${id}`, "PATCH", product)
    console.log("res:", res.data)
    return res.data
}

export const removeProduct = async (id: any) => {
    const res = await callApi(`${prefix}/${id}`, "DELETE")
    console.log("res:", res.data)
    return res.data
}
/*
 @Get("/all")
 @Get("/all/user/:userId")
 @Get("/:id")
@Patch("/:id")
@Delete("/:id")
*/