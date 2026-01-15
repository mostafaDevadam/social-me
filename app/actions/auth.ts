"use server";

import axios from "axios"
import { redirect } from "next/navigation"
import { deleteToken, setToken } from "../_lib/token"
import { cookies } from "next/headers"
import { deleteID, setID } from "../_lib/id";


export const loginAction = async (formData: FormData) => {
    console.log("formData:", formData, formData.get("email"), formData.get("password"))
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signin`, {
            email: formData.get("email"),
            password: formData.get("password")
        })
        console.log("response:", response.data, response.data['accessToken'])
        if(!response.data || !response.data.accesstoken) console.log("Invalid credentials")
         
        // set it in cookie
        await setToken(response.data.accessToken)  
        await setID(response.data.id)  
         //const cookieStore = await cookies()
         //const theme = cookieStore.set('theme', 'dark', {httpOnly: true, secure: true, sameSite: 'strict', maxAge: 60 * 60 * 24 * 7, path: '/'})
    } catch (error) {
       console.log("Failed to login:", error);
    }

    redirect("/profile");
}

export const logoutAction = async () => {
    // remove it from cookie
    await deleteToken()
    await deleteID()
    redirect("/login")
}