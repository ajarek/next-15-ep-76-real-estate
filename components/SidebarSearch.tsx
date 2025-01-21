import React from 'react'
import { SearchLocation } from './SearchLocation'
import { Label } from '@radix-ui/react-label'
import Link from 'next/link'
import { SearchPrice } from './SearchPrice'
import { SearchBedrooms } from './SearchBedrooms'

const SidebarSearch = () => {
  return (
    <div className='h-[540px] bg-primary text-primary-foreground rounded-lg p-4 gap-4 flex flex-col'>
      <Label>Szukaj wg Lokalizacji</Label>
      <SearchLocation />
       <Label>Szukaj po Cenie</Label>
      <SearchPrice />
       <Label>Szukaj po Ilości Sypialni</Label>
      <SearchBedrooms/>
      <Label>Szukaj wg Powierzchni</Label>
      {/*<Search query='area'/>
      <Label>Szukaj wg Roku Budowy</Label>
      <Search query='yearBuilt'/>  */}
      <Link href='/' className='bg-secondary text-secondary-foreground rounded-lg p-2 text-center '><span className='text-primary font-semibold'>Resetuj Filtry</span></Link>
    </div>
  )
}

export default SidebarSearch