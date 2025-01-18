import  Signout  from '@/components/Signout'
import React from 'react'

const SignoutUser = () => {
  return (
    <div className='min-h-[calc(100vh-32px*2-48px)] flex flex-col items-center justify-center bg-secondary p-4 gap-4 '>
      <h1 className='text-2xl font-bold'>Signout</h1>
      <Signout />
    </div>
  )
}

export default SignoutUser