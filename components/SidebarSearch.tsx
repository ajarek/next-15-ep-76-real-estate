'use client'

import React from 'react'
import { Search } from './Search'
import { Label } from '@radix-ui/react-label'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

const SidebarSearch = () => {
  const router = useRouter()
  const handleReset = () => {
    router.push('/')

    const clearCity = document.querySelector(
      'input[name="city"]'
    ) as HTMLInputElement
    const clearPrice = document.querySelector(
      'input[name="price"]'
    ) as HTMLInputElement
    const clearBedrooms = document.querySelector(
      'input[name="bedrooms"]'
    ) as HTMLInputElement
    const clearSquareFeet = document.querySelector(
      'input[name="squareFeet"]'
    ) as HTMLInputElement
    const clearYearBuilt = document.querySelector(
      'input[name="yearBuilt"]'
    ) as HTMLInputElement

    if (clearCity) {
      setTimeout(() => {
        clearCity.value = ''
        clearPrice.value = ''
        clearBedrooms.value = ''
        clearSquareFeet.value = ''
        clearYearBuilt.value = ''
      }, 1000)
    }
  }
  return (
    <div className='h-[520px] bg-primary text-primary-foreground rounded-lg p-4 gap-3 flex flex-col'>
      <Label>Szukaj wg Lokalizacji</Label>
      <Search query='city' />
      <Label>Szukaj po Cenie</Label>
      <Search query='price' />
      <Label>Szukaj po Ilości Sypialni</Label>
      <Search query='bedrooms' />
      <Label>Szukaj wg Powierzchni</Label>
      <Search query='squareFeet' />
      <Label>Szukaj wg Roku Budowy</Label>
      <Search query='yearBuilt' />
      <Button
        onClick={handleReset}
        className='bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg p-2 mt-2 text-center '
      >
        <span className='text-primary font-semibold'>Resetuj Filtry</span>
      </Button>
    </div>
  )
}

export default SidebarSearch
