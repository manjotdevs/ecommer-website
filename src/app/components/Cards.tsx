'use client'
import React from 'react'
import Image from 'next/image'
import Users from '../images/user-6380868.svg'
export default function Cards(props){
    return(
        <div className='bg-gray-900 text-white rounded-2xl w-96 h-60 p-5'>
            <div className='flex space-x-7 mb-4'>
            <Image
            className='rounded-full'
                src={Users}
                alt='Techer Pic'
                width={40}
            />
            <p className='font-bold text-lg'>{props.subject}</p>
            <p>{props.teacher}</p>
            </div>
            <p>{props.text}</p>
        </div>

    )
}