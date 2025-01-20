import React from 'react'
import { Search } from './Search'
import { Label } from '@radix-ui/react-label'

const SidebarSearch = () => {
  return (
    <div className='h-[520px] bg-primary text-primary-foreground rounded-lg p-4 gap-4 flex flex-col'>
      <Label>Szukaj wg Lokalizacji</Label>
      <Search query='location'/>
      <Label>Szukaj po Cenie</Label>
      <Search query='price'/>
      <Label>Szukaj po Ilości Sypialni</Label>
      <Search query='bedrooms'/>
      <Label>Szukaj wg Powierzchni</Label>
      <Search query='area'/>
      <Label>Szukaj wg Roku Budowy</Label>
      <Search query='yearBuilt'/>
    </div>
  )
}

export default SidebarSearch