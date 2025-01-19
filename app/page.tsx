import Hause from '@/components/Hause'
import { houses } from '@/data/houses.json'

export default function Home() {
  return (
    <main className='min-h-[calc(100vh-32px*2-48px)] flex flex-col   p-4 gap-4   '>
      <div className='w-full grid grid-cols-3 gap-4 place-items-center max-lg:grid-cols-2 max-sm:grid-cols-1'>
        <Hause houses={houses} />
      </div>
    </main>
  )
}
