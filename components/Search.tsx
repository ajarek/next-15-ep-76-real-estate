'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import { Input } from '@/components/ui/input'
import { useEffect } from 'react'
interface SearchProps {
  query: string
}

export function Search({query}:SearchProps) {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set(`${query}`, term)
    } else {
      params.delete(`${query}`)
    }
    try {
      replace(`${pathname}?${params.toString()}`)
    } catch (error) {
      console.error('Failed to replace URL parameters:', error)
    }
  }, 300)

  // useEffect(() => {
  //   const clearInput = document.querySelector(
  //     `input[name=${query}]`
  //   ) as HTMLInputElement
  //   if (clearInput) {
  //     setTimeout(() => {
  //       clearInput.value = ''
  //     }, 3000)
  //   }
  // }, [query, searchParams])

  return (
    <div className='w-full '>
      <Input
        name={query}
        type='search'
        placeholder='Szukaj...'
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get(query)?.toString()}
        className='pl-10 bg-background text-foreground text-xl rounded-full selector'
        aria-label='Search'
       
      />
    </div>
  )
}
