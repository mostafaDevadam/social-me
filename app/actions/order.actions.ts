"use server";

import { refresh } from "next/cache";
import { payOrderById, removeOrder } from "../api/orders";


export const payOrderAction = async (prevState: any, formData: FormData) => {
    const orderId = formData.get("orderId")?.toString()
    const isPaid = formData.get("isPaid")?.toString()


    console.log("payOrderAction:", formData,)

    try {
        const res = await payOrderById(orderId!!, Boolean(isPaid!!))
        console.log("res payOrderById:", res)
        refresh()
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to pay order:", error);
        return { error: "Failed to pay order" }
    }
}

export const removeOrderAction = async (prevState: any, formData: FormData) => {
    const orderId = formData.get("orderId")?.toString()


    console.log("removeOrderAction:", formData,)

    try {
        const res = await removeOrder(orderId!!)
        console.log("res removeOrder:", res)
        return { success: true, data: res }
    } catch (error) {
        console.log("Failed to remove order:", error);
        return { error: "Failed to remove order" }
    }
}