"use client";

import React from 'react'
import { PAGE_TYPE } from '../_types/types';
import JoinButton from './JoinButton';
import Link from 'next/link';
import { joinPageAction, removePageAction } from '../actions/pages.actions';
import RemovePageGroupButton from './RemovePageGroupButton';

type CardPageType = {
    page: PAGE_TYPE
    isJoin: boolean
    userId: any
}
const CardPage = ({ page, isJoin , userId}: CardPageType) => {
    return (
        <div className='flex flex-col justify-between rounded-md border mt-2 pt-2 p-4 w-1/2 mx-auto text-start'>
            <p>{page.name} </p>

            {page.user === userId && <div className={'flex flex-row mt-3 justify-between'}>
                <RemovePageGroupButton action={removePageAction} pageId={page?._id} />
                <Link href={`/pages/${page?._id}`} className='border rounded-md bg-sky-500 text-white px-2 py-1'>View</Link>
            </div>}

            {page.user !== userId && <div className={'flex flex-row mt-3 justify-between'}>
                <Link href={`/pages/${page?._id}`} className='border rounded-md bg-sky-500 text-white px-2 py-1'>View</Link>
                {isJoin && <JoinButton pageId={page?._id} action={joinPageAction} />}
            </div>}
        </div>
    )
}

export default CardPage