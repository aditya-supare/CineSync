'use client'
import React from 'react'
import { useEffect } from 'react'

interface errorprops{
  error:any;
  reset:any;
}

export default function error({error , reset}:errorprops) {
    useEffect(() =>{
        console.log(error);
    },[error])
  return (
    <div className='text-center mt-10'>
      <h1>Something went wrong. Please try again later.</h1>
      <button className='hover: text-green-500' onClick={()=>reset()}>Try Again</button> 
    </div>
  )
}
