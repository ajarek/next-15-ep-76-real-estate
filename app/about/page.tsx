import MotionLink from "@/components/MotionLink"
import MotionImage from "@/components/MotionImage"
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'
const AboutUs = async () => {
  const session = await auth()
  if(!session){ 
    redirect('/login')
  }

  return (
    <div className='w-full container min-h-[calc(100vh-(32px*2+48px))] flex flex-col  justify-center bg-secondary gap-4 p-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center'>
        <div className='relative w-full h-96 md:h-[400px] rounded-lg overflow-hidden flex justify-center items-center'>
        <MotionImage src='/images/team.jpg' alt='team' width={400} height={400}/>
        </div>

        <div className='space-y-6'>
          <h1 className='text-4xl font-bold text-gray-900'>About Us</h1>
          <p className='text-lg text-gray-600'>
            We are a forward-thinking company dedicated to transforming
            businesses with intelligent solutions. Our team of experts leverages
            cutting-edge technology to drive innovation, efficiency, and growth
            for our clients. Whether it&apos;s through AI, data analytics, or
            custom software development, we are committed to delivering results
            that matter.
          </p>
          <p className='text-lg text-gray-600'>
            Our mission is to empower companies to thrive in the digital age by
            providing tailored solutions that address their unique challenges.
            We believe in collaboration, creativity, and continuous improvement,
            ensuring that our clients stay ahead of the curve.
          </p>
          <div className='flex justify-end'>
            <MotionLink label="Contact Us" href="/contact" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutUs