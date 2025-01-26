import OfferForm from '@/components/OfferForm'
import MotionImage from '@/components/MotionImage'
import { auth } from '@/app/api/auth/auth'
import { redirect } from 'next/navigation'
import MotionLink from '@/components/MotionLink'

const Offer = async ({
  searchParams,
}: {
  searchParams: Promise<{ id: string; image: string }>
}) => {
  const session = await auth()
  const { id, image } = (await searchParams) || {}

  if (!session) {
    redirect('/login')
  }

  if (!id || !image) {
    return (
      <div className='min-h-[calc(100vh-32px*2-48px)] flex flex-col items-center justify-center gap-4'>
        <p className='text-2xl font-bold text-red-500'>
          Brak danych do wyświetlenia
        </p>
        <p>Należy wybrać ofertę z listy</p>
        <MotionLink
          href='/'
          label='Powrót do strony głównej'
        />
      </div>
    )
  }

  return (
    <div className='min-h-[calc(100vh-32px*2-48px)] grid grid-cols-2 max-lg:grid-cols-1 place-items-center  p-2 gap-4 '>
      <MotionImage
        src={image}
        alt='Offer'
        width={540}
        height={306}
      />
      <div className='w-full flex flex-col items-center mt-4'>
        <h1 className='text-xl font-bold  flex items-center'>
          Chcę otrzymać pełną ofertę dla id-00{id}
        </h1>
        <OfferForm
          nameUser={session.user?.email?.split('@')[0].toUpperCase() || ''}
          emailUser={session.user?.email || ''}
        />
      </div>
    </div>
  )
}

export default Offer
