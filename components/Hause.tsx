import { Button } from '@/components/ui/button'
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

const Hause = ({ houses }: { houses: HouseTypes[] }) => {
  return (
    <>
      {houses.map((house: HouseTypes) => {
        return (
          <Card
            key={house.id}
            className='shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out'
          >
            <CardHeader className='relative w-[300px] h-[170px] max-sm:w-[375px]  max-sm:h-[210px] overflow-hidden'>
              <Image
                className='dark:invert object-cover w-full h-full rounded-t-lg '
                src={house.image}
                alt='logo'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            </CardHeader>
            <CardContent className='p-2 flex flex-col items-start justify-start  '>
              <CardTitle>Dom Jednorodzinny</CardTitle>
              <CardDescription className='text-foreground '>
                <p>{house.address}  {house.city} </p>
                <p className='text-xl'>{house.price} PLN</p>  
              </CardDescription>
            </CardContent>
            <CardFooter className='p-2 flex justify-center '>
              <Button>Zobacz Szczegóły</Button>
            </CardFooter>
          </Card>
        )
      })}
    </>
  )
}

export default Hause
