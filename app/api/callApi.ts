import axios from "axios"
import { getToken } from "../_lib/token"


const base_URL = String(process.env.NEXT_PUBLIC_BASE_URL)
export const callApi = async (url: string, method: string,body?: any) => {
    const token = await getToken()
    const response = await axios({
        baseURL: `${base_URL}/${url}`,
        headers: {
            "Content-Type": "application/json",
            "auth-token": token || ""
        },
        method: method,
        data: body
    })
    return response
    
}