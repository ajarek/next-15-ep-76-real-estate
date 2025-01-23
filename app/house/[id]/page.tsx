import React from 'react'
import { houses } from '@/data/houses.json'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const House = ({ params }: { params: { id: string } }) => {
  const hoseId = houses.find((house) => house.id === +params.id)
  return (
    <div className='min-h-[calc(100vh-32px*2-48px)] grid grid-cols-2 max-lg:grid-cols-1 p-4 gap-4 place-items-center'>
      <div className='relative w-[540px] h-[306px] max-sm:w-[375px]  max-sm:h-[210px] overflow-hidden'>
        <Image
          src={hoseId?.image || ''}
          alt={'foto house'}
         fill
          className='w-full h-full object-cover rounded-lg shadow-xl transition-transform duration-300 ease-in-out hover:scale-105'
           sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
      </div>
      <div>
        <h1 className='text-2xl font-bold'>{'Dom Jednorodzinny'}</h1>
        <p className='text-lg text-gray-500'>Cena: <span className='font-semibold text-foreground'>{hoseId?.price} PLN</span></p>
        <p className='text-lg text-gray-500'>Miasto: <span className='font-semibold text-foreground'>{hoseId?.city}</span></p>
        <p className='text-lg text-gray-500'>Adres: <span className='font-semibold text-foreground'>{hoseId?.address}</span></p>
        <p className='text-lg text-gray-500'>Ilość sypialni: <span className='font-semibold text-foreground'>{hoseId?.bedrooms}</span></p>
        <p className='text-lg text-gray-500'>Ilość łazienek: <span className='font-semibold text-foreground'>{hoseId?.bathrooms}</span></p>
        <p className='text-lg text-gray-500'>Powierzchnia: <span className='font-semibold text-foreground'>{hoseId?.squareFeet} m²</span></p>
        <p className='text-lg text-gray-500'>Rok budowy: <span className='font-semibold text-foreground'>{hoseId?.yearBuilt}</span></p>
        <Button variant='default' className='mt-4'>Jestem Zainteresowany</Button>
      </div>
    </div>
  )
}

export default House
