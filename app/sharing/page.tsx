import React from 'react'
import { getAllSharesByUserId } from '../api/shares'
import { SHARE_TYPE } from '../_types/types'
import SharingPostsList from '../_components/SharingPostsList'
import { getID } from '../_lib/id'

const SharingPage = async () => {

    const userId = await getID()

    const user_shares: SHARE_TYPE[] = await getAllSharesByUserId()
    console.log("user_shares:", user_shares)

    return (
        <div className="flex flex-col gap-5 min-h-screen items-center justify-items-center bg-zinc-50 font-sans dark:bg-black">
            <div className="text-center mx-auto flex flex-col justify-center">
                  
                 {!user_shares && 'No sharing Posts'}
                <div className="mx-auto mt-10 ">
                    <SharingPostsList shares={user_shares} userId={userId} />
                </div>
            </div>
        </div>
    )
}

export default SharingPage