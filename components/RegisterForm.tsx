'use client'

import React, { useState } from 'react'
import { UserWithoutId } from '@/lib/models'
import { addUser } from '@/lib/action'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const DEFAULT_IS_ADMIN: boolean = false

const RegisterForm = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [img, setImage] = useState('')
  const [isAdmin] = useState(DEFAULT_IS_ADMIN)

  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData: UserWithoutId = {
      username,
      email,
      password,
      img,
      isAdmin,
    }

    try {
      await addUser(formData)
      router.push('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='p-4 bg-white flex flex-col items-center rounded-lg shadow-lg'>
      <div className='flex justify-center p-2'>
        <Link href='/'>
          <Image
            src='/images/logo.jpg'
            alt='logo'
            width={40}
            height={40}
            className='w-full h-full object-cover  '
          />
        </Link>
      </div>
      <form
        className='w-80  flex flex-col gap-4 p-6  '
        onSubmit={handleSubmit}
      >
        <Input
          type='text'
          placeholder='Name'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='bg-white'
        />
        <Input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='bg-white'
        />
        <Input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='bg-white'
        />
        <Input
          type='text'
          placeholder='Your photo (optional)'
          value={img}
          onChange={(e) => setImage(e.target.value)}
          className='bg-white'
        />
        <Input
          type='hidden'
          name='isAdmin'
          value={`${DEFAULT_IS_ADMIN}`}
        />
        <Button
          className=''
          type='submit'
        >
          Register
        </Button>
        <Link
          href='/login'
          className='text-black'
        >
          Already have an account? <b className='text-[#0E78F9]'>Login</b>
        </Link>
      </form>
    </div>
  )
}

export default RegisterForm
