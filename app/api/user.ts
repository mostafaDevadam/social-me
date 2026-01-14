

import { getID } from "../_lib/id"
import { callApi } from "./callApi"


const prefix = "users"

export const getAllUsersWithoutCurrentUser = async () => {
    const userId = await getID()
    const response = await callApi(`${prefix}/all/user/${userId}`, "GET")
    console.log("response:", response.data)
    return response.data
}

