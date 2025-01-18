"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const NotFoundPage = () => {
  const router = useRouter()
  return (
    <div className='w-full container min-h-[calc(100vh-(32px*2+48px))] flex flex-col items-center justify-center bg-secondary gap-4 p-4'>
      <Image src='/notfound.jpeg' alt='404' width={400} height={266} priority/>
      <h1 className='text-center text-xl font-semibold'>No accessible page found.</h1>
      <p className='text-center'>
      The page you are looking for may have been deleted, it had a name
      have changed or are temporarily unavailable.
      </p>
      <div className=''>
        <Button
          onClick={() => { router.push("/") }}
          aria-label='Go tony głównej'
        >
          Return to home page
        </Button>
      </div>
    </div>
  )
}
export default NotFoundPage
