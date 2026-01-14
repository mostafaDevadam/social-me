import { getID } from "../_lib/id"
import { callApi } from "./callApi"

const prefix = "orders"

/*
 @Get("/all/user/:userId")
@Get("/:id")
 @Patch("/pay/:id")
@Delete("/:orderId")
*/

export const getAllOrdersByUser = async () => {
    const userId = await getID()
    const res = await callApi(`${prefix}/all/user/${userId}`, "GET")
    console.log("res:", res.data)
    return res.data
}
export const getOrderById = async (id: any) => {
    const res = await callApi(`${prefix}/${id}`, "GET")
    console.log("res:", res.data)
    return res.data
}
export const payOrderById = async (id: any, isPaid: boolean) => {
    const res = await callApi(`${prefix}/pay/${id}`, "PATCH", { isPaid: isPaid })
    console.log("res:", res.data)
    return res.data
}
export const removeOrder = async (id: any) => {
    const res = await callApi(`${prefix}/${id}`, "DELETE")
    console.log("res:", res.data)
    return res.data
}