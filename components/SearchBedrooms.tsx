"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"
import { Input } from "@/components/ui/input"
import { useEffect } from "react"

export function SearchBedrooms() {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set('bedrooms', term)
    } else {
      params.delete('bedrooms')
    }
    try {
      replace(`${pathname}?${params.toString()}`)
    } catch (error) {
      console.error('Failed to replace URL parameters:', error)
    }
  }, 300)
   useEffect(()=>{
       const clearInput = document.querySelector('input[name="bedrooms"]') as HTMLInputElement
         if (clearInput) {
           setTimeout(() => {
           clearInput.value = ''
           }, 3000)
         }
     }, [searchParams])
  return (
    <div className="w-full ">
      <Input
        name='bedrooms'
        type='search'
        placeholder='Search note...'
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('bedrooms')?.toString()}
        className="pl-10 bg-background text-foreground rounded-full"
      />
    </div>
  )
}