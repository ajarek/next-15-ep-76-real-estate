import React from 'react'
import { Search } from './Search'
import { Label } from '@radix-ui/react-label'
import Link from 'next/link'


const SidebarSearch = () => {
  return (
    <div className='h-[520px] bg-primary text-primary-foreground rounded-lg p-4 gap-3 flex flex-col'>
      <Label>Szukaj wg Lokalizacji</Label>
      <Search query='city' />
       <Label>Szukaj po Cenie</Label>
      <Search query='price' />
       <Label>Szukaj po Ilości Sypialni</Label>
      <Search query='bedrooms' />
      <Label>Szukaj wg Powierzchni</Label>
      <Search query='squareFeet'/>
      <Label>Szukaj wg Roku Budowy</Label>
      <Search query='yearBuilt'/> 
      <Link href='/' className='bg-secondary text-secondary-foreground rounded-lg p-2 mt-2 text-center '><span className='text-primary font-semibold'>Resetuj Filtry</span></Link>
    </div>
  )
}

export default SidebarSearch