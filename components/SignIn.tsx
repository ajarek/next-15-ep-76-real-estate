import { signIn } from "@/app/api/auth/auth"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import Link from "next/link"
import Image from "next/image"
 
export function SignIn() {
  return (
    <form
      action={async (formData) => {
        "use server"
        await signIn("credentials", formData)
      }}
      className="p-4 bg-white flex flex-col items-center rounded-lg shadow-lg gap-4"
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
      <Label className="w-full">
        Name
        <Input name="username" type="text" className="mt-2"/>
      </Label>
      <Label className="w-full">
        Password
        <Input name="password" type="password" className="mt-2"/>
      </Label>
      <Button type="submit" className="w-full">Sign In</Button>
      <Link
          href='/register'
          className='text-black'
        >
         Don&apos;t have an account yet? <b className='text-[#0E78F9]'>Register</b>
        </Link>
    </form>
  )
}