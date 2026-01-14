import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import { getAllPages, getAllPagesByUserId } from '../api/pages'
import PagesList from '../_components/PagesList'
import Link from 'next/link'
import { getID } from '../_lib/id'

const PagesPage = async () => {

  const userId = await getID()

  const pages = await getAllPages()
  const user_pages = await getAllPagesByUserId()
  console.log("pages:", pages)
  console.log("user_pages:", user_pages)


  return (
    <div className="flex flex-col gap-5 min-h-screen items-center justify-items-center bg-zinc-50 font-sans dark:bg-black">

      <div className='flex flex-row justify-end w-full'>
        <Link href="/pages/new" className='hover:bg-sky-500 hover:rounded-md hover:text-white px-2 py-2 border rounded-md'>New Page</Link>
      </div>

      <div className="text-center mx-auto flex flex-col justify-center">



        <div className="mx-auto mt-10 w-full">



          <Tabs defaultValue="pages" className="w-[500px]">
            <TabsList>
              <TabsTrigger value="pages">Pages</TabsTrigger>
              <TabsTrigger value="mypages">MyPages</TabsTrigger>
            </TabsList>
            <TabsContent value="pages">
              <PagesList pages={pages} isJoin={true} userId={userId} />
            </TabsContent>
            <TabsContent value="mypages">
              <PagesList pages={user_pages} isJoin={false} userId={userId} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default PagesPage