"use client";

import React from 'react'
import { REQUEST_F_TYPE } from '../_types/types'
import CardRequest from './CardRequest';

type RequestsListProps = {
    requests: REQUEST_F_TYPE[]
    userId: any
}
const RequestsList = ({ requests, userId }: RequestsListProps) => {
    return (
        <>
            {requests.map((request) => (
                <div key={request._id} >
                    <CardRequest request={request} userId={userId} />
                </div>))
            }
        </>
    )
}

export default RequestsList