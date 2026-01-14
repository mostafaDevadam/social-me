/*
 @Post("/product/:productId/user/:userId")
 @Patch("/product/:productId/cart/:cartId")
 @Get("/user/:userId")
@Patch("/:cartdId/ordered/")
*/

import { callApi } from "./callApi"

const prefix = "carts"

export const addProductToCart = async (userId: any, productId: any) => {
    const res = await callApi(`${prefix}/product/${productId}/user/${userId}`, "POST")
    console.log("res:", res.data)
    return res.data
}

export const removeProductFromCart = async (productId: any, cartId: any) => {
    const res = await callApi(`${prefix}/product/${productId}/cart/${cartId}`, "PATCH")
    console.log("res:", res.data)
    return res.data
}

export const getCartByUserId = async (userId: any) => {
    const res = await callApi(`${prefix}/user/${userId}`, "GET")
    console.log("res:", res.data)
    return res.data
}

export const orderedCart = async (cartId: any, isOrdered: boolean) => {
    console.log("orderedCart:", cartId, isOrdered)
    const res = await callApi(`${prefix}/${cartId}/ordered`, "PATCH", { isOrdered: isOrdered })
    console.log("res:", res.data)
    return res.data
}