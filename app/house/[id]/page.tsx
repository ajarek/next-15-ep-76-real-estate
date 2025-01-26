import React from 'react'
import { houses } from '@/data/houses.json'
import MotionImage from '@/components/MotionImage'
import MotionLink from '@/components/MotionLink'

const House = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const hoseId = houses.find((house) => house.id === +id)
  return (
    <div className='min-h-[calc(100vh-32px*2-48px)] grid grid-cols-2 max-lg:grid-cols-1 p-4 gap-4 place-items-center'>
      <div className='relative w-[540px] h-[306px] max-sm:w-[375px]  max-sm:h-[210px] '>
        <MotionImage
          src={hoseId?.image || ''}
          alt='fotografia domu'
          width={540}
          height={306}
        />
      </div>
      <div>
        <h1 className='text-2xl font-bold'>
          {'Dom Jednorodzinny'} id-00{hoseId?.id}
        </h1>
        <p className='text-lg text-gray-500'>
          Cena:{' '}
          <span className='font-semibold text-foreground'>
            {hoseId?.price} PLN
          </span>
        </p>
        <p className='text-lg text-gray-500'>
          Miasto:{' '}
          <span className='font-semibold text-foreground'>{hoseId?.city}</span>
        </p>
        <p className='text-lg text-gray-500'>
          Adres:{' '}
          <span className='font-semibold text-foreground'>
            {hoseId?.address}
          </span>
        </p>
        <p className='text-lg text-gray-500'>
          Ilość sypialni:{' '}
          <span className='font-semibold text-foreground'>
            {hoseId?.bedrooms}
          </span>
        </p>
        <p className='text-lg text-gray-500'>
          Ilość łazienek:{' '}
          <span className='font-semibold text-foreground'>
            {hoseId?.bathrooms}
          </span>
        </p>
        <p className='text-lg text-gray-500'>
          Powierzchnia:{' '}
          <span className='font-semibold text-foreground'>
            {hoseId?.squareFeet} m²
          </span>
        </p>
        <p className='text-lg text-gray-500 mb-4'>
          Rok budowy:{' '}
          <span className='font-semibold text-foreground'>
            {hoseId?.yearBuilt}
          </span>
        </p>
        <MotionLink
          href={`/offer?id=${hoseId?.id}&image=${hoseId?.image}`}
          label='Jestem zainteresowany'
        />
      </div>
    </div>
  )
}

export default House
