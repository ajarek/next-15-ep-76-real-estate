import OfferForm from '@/components/OfferForm'
import MotionImage from '@/components/MotionImage'
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'

const Offer = async ({searchParams}:{searchParams:Promise<{id:string,image:string}>}) => {
  const session = await auth()
  const {id, image} = await searchParams || {}
  if(!session){ 
    redirect('/login')
  }
  return (
    <div className='min-h-[calc(100vh-32px*2-48px)] grid grid-cols-2 max-lg:grid-cols-1 place-items-center  p-2 gap-4 '>
        <MotionImage src={image} alt='Offer' width={540} height={306}/>
        <div className='w-full flex flex-col items-center mt-4'>
        <h1 className='text-xl font-bold  flex items-center'>
         Chcę otrzymać pełną ofertę dla id-00{id}
        </h1>
        <OfferForm nameUser={(session.user?.email)?.split('@')[0].toUpperCase()  ||''} emailUser={session.user?.email ||''}/>
        </div>
    </div>
  )
}

export default Offer