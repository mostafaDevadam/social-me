"use client";

import React from 'react'
import { PAGE_TYPE } from '../_types/types';
import CardPage from './CardPage';

type PagesListProps = {
    pages: PAGE_TYPE[]
    isJoin: boolean
    userId: any
    
}
const PagesList = ({pages, isJoin, userId}: PagesListProps) => {
  return (
     <div className='space-y-4 mx-auto w-full'>
                    {pages.map((page: PAGE_TYPE) => (
                        <CardPage key={page._id} page={page} isJoin={isJoin} userId={userId} />
                    ))}
                </div>
  )
}

export default PagesList