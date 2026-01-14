import React from 'react'
import PeopleList from '../_components/PeopleList'
import { getAllUsersWithoutCurrentUser } from '../api/user'
import { USERTYPE } from '../_types/types'
import { getID } from '../_lib/id'

const PeoplePage = async () => {

    const users: USERTYPE[] = await getAllUsersWithoutCurrentUser()
    console.log("users:", users)

    const userId = await getID();
    console.log("userId:", userId);


  return (
    <div className="flex flex-col gap-5 min-h-screen items-center justify-items-center bg-zinc-50 font-sans dark:bg-black">
            <div className="text-center mx-auto flex flex-col justify-center w-full">
                <div className="mx-auto mt-10 w-full">
                    <PeopleList people={users} userId={userId} />
                </div>
            </div>
        </div>
  )
}

export default PeoplePage