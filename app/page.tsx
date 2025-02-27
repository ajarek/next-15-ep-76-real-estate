import Hause from '@/components/Hause'
import SidebarSearch from '@/components/SidebarSearch'
import { houses } from '@/data/houses.json'

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{
    city: string
    price: string
    bedrooms: string
    squareFeet: string
    yearBuilt: string
  }>
}) {
  const { city, price, bedrooms, squareFeet, yearBuilt } = await searchParams
  return (
    <main className='min-h-[calc(100vh-32px*2-48px)] grid grid-cols-[3fr_1fr] max-lg:grid-cols-1 p-4 gap-4'>
      <div className='w-full grid grid-cols-3 gap-4 place-items-center max-lg:grid-cols-2 max-sm:grid-cols-1'>
        <Hause
          houses={houses}
          city={city}
          price={price}
          bedrooms={bedrooms}
          squareFeet={squareFeet}
          yearBuilt={yearBuilt}
        />
      </div>
      <SidebarSearch />
    </main>
  )
}
