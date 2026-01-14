"use client";
import { useQuery } from "@tanstack/react-query";
import { getAllArchivesByChatId } from "../api/archive";
import { getChatArchivesAction } from "../actions/archive.action";

  // Ensures client-side only


export const useChatArchive = (chatId: any) => {

     const archivesQuery = useQuery({
            queryKey: ['archives', chatId], // Includes param—key changes → refetch
            queryFn: () => getAllArchivesByChatId(chatId), // Closure accesses param
            staleTime: 5 * 60 * 1000, // 5 min
        });


   

     const getAllArchives = () => {
        const formData = new FormData();
        formData.append("chatId", chatId);
        return getChatArchivesAction(null, formData)
     }

     return {getAllArchives}

}