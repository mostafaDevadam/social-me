import axios from "axios";
import { getToken } from "../_lib/token";


const API_URL = "http://localhost:3000/likes"

export const likePost = async (postId: any, userId: any, isLiked: boolean) => {
    console.log({ postId, userId, isLiked })
    const token = await getToken();
    const response = await axios.post(`${API_URL}/post/${postId}/user/${userId}`, {
        headers: {
            "Content-Type": "application/json",
            "auth-token": token
        },
        body: {
            isLiked
        }
    })
    return response.data;
}

