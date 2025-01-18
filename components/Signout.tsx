import { signOut } from "@/app/api/auth/auth"
import { Button } from "./ui/button"
import Link from "next/link"
import Image from "next/image"

const Signout = () => {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
      className='p-4 bg-white flex flex-col items-center rounded-lg shadow-lg gap-4'
    >
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
       <p>Are you sure you want to sign out?</p>
      <Button type='submit' className='w-full bg-red-500 text-white hover:bg-red-600'>
        Sign Out
      </Button>
    </form>
  )
}

export default Signout
