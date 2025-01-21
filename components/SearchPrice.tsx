"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"
import { Input } from "@/components/ui/input"
import { useEffect } from "react"

export function SearchPrice() {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set('price', term)
    } else {
      params.delete('price')
    }
    try {
      replace(`${pathname}?${params.toString()}`)
    } catch (error) {
      console.error('Failed to replace URL parameters:', error)
    }
  }, 300)
   useEffect(()=>{
       const clearInput = document.querySelector('input[name="price"]') as HTMLInputElement
         if (clearInput) {
           setTimeout(() => {
           clearInput.value = ''
           }, 3000)
         }
     }, [searchParams])
  return (
    <div className="w-full ">
      <Input
        name='price'
        type='search'
        placeholder='Search note...'
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('price')?.toString()}
        className="pl-10 bg-background text-foreground rounded-full"
      />
    </div>
  )
}