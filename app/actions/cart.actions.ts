"use server";


import { getID } from "../_lib/id"
import { addProductToCart, orderedCart, removeProductFromCart } from "../api/cart"


export const addProductToCartAction = async (prevState: any, formData: FormData) => {
    const userId = await getID()
    const productId = formData.get("productId")?.toString()

    console.log("addProductToCartAction:", formData,)

    try {
        const res = await addProductToCart(userId, productId!!)
        console.log("res addProductToCart:", res)
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to add product to Cart:", error);
        return { error: "Failed to add product to Cart" }
    }

}
export const removeProductFromCartAction = async (prevState: any, formData: FormData) => {

    const productId = formData.get("productId")?.toString()
    const cartId = formData.get("cartId")?.toString()

    console.log("removeProductFromCartAction:", formData,)

    try {
        const res = await removeProductFromCart(productId!!, cartId!!)
        console.log("res removeProductFromCart:", res)
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to remove product from Cart:", error);
        return { error: "Failed to remove product from Cart" }
    }

}
export const orderedCartAction = async (prevState: any, formData: FormData) => {
    const cartId = formData.get("cartId")?.toString()
    const isOrdered = formData.get("isOrdered")?.toString()


    console.log("orderedCartAction:", formData,)

    try {
        const res = await orderedCart(cartId!!, Boolean(isOrdered!!))
        console.log("res orderedCart:", res)
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to ordered Cart:", error);
        return { error: "Failed to ordered Cart" }
    }
}