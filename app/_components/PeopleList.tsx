"use client";

import React from 'react'
import { USERTYPE } from '../_types/types';
import CardPeople from './CardPeople';

type PeopleListProps = {
    people: USERTYPE[]
    userId: any
}

const PeopleList = ({people, userId}: PeopleListProps) => {
  return (
    <div className='space-y-4 mx-auto w-full'>
                {people.map((person: USERTYPE) => (
                    <CardPeople key={person._id} person={person} userId={userId} />
                ))}
            </div>
  )
}

export default PeopleList