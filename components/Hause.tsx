import { HouseTypes } from '@/types/type-hause'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Bath, Bed, MapPin, Ruler } from 'lucide-react'
import MotionLink from './MotionLink'

const Hause = ({ houses, city, price, bedrooms, squareFeet, yearBuilt }: { houses: HouseTypes[] , city: string, price: string, bedrooms: string , squareFeet: string, yearBuilt: string}) => {
  return (
    <>
      {houses
        .filter((house: HouseTypes) => !city || house.city.toUpperCase().includes(city.toUpperCase()))
        .filter((house: HouseTypes) => !price || house.price <= Number(price))
        .filter((house: HouseTypes) => !squareFeet || house.squareFeet <= Number(squareFeet))
        .filter((house: HouseTypes) => !bedrooms || house.bedrooms == Number(bedrooms))
        .filter((house: HouseTypes) => !yearBuilt || house.yearBuilt == Number(yearBuilt))
      .map((house: HouseTypes) => {
        return (
          <Card
            key={house.id}
            className='shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out'
          >
            <CardHeader className='relative w-[270px] h-[153px] max-sm:w-[375px]  max-sm:h-[210px] overflow-hidden'>
              <Image
                className='dark:invert object-cover w-full h-full rounded-t-lg '
                src={house.image}
                alt='logo'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            </CardHeader>
            <CardContent className='p-2 flex flex-col items-start justify-start gap-4 '>
              <CardTitle>
               <p> Dom Jednorodzinny</p>
               <p className='text-xl font-normal'>{house.price} PLN</p>  
                </CardTitle>
              <CardDescription className='text-foreground flex items-center gap-2 '>
              <MapPin color='#dc2626' />
                <p>{house.address}  {house.city} </p>
               
              </CardDescription>
              <div className='w-full grid grid-cols-3 gap-2 place-items-center'>
                <div className='flex flex-col items-center'><Bed color='#dc2626 ' /> <div className='font-semibold'>{house.bedrooms}</div><div>Sypialnie</div></div>
                <div className='flex flex-col items-center'><Bath color='#dc2626 ' /> <div className='font-semibold'>{house.bathrooms}</div><div>Łazienki</div></div>
                <div className='flex flex-col items-center'><Ruler color='#dc2626 ' /> <div className='font-semibold'>{house.squareFeet}</div><div>Pow/m²</div></div>
              </div>
            </CardContent>
            <CardFooter className='p-4 flex justify-center '>
              <MotionLink label='Zobacz Szczegóły' href={`/house/${house.id}`}  />
            </CardFooter>
          </Card>
        )
      })}
    </>
  )
}

export default Hause
