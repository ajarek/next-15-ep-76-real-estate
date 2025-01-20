"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"
import { Input } from "@/components/ui/input"

export function Search({ query }:{ query: string }) {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  const handleSearch = useDebouncedCallback((term: string) => {
    console.log(`Searching... ${term}`)
    const params = new URLSearchParams(searchParams)
    

    if (term) {
      params.set(query, term)
    } else {
      params.delete(query)
    }
    replace(`${pathname}?${params.toString()}`)
  }, 300)

  return (
    <div className="w-full ">
      <Input
        type='search'
        placeholder='Search note...'
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get(query)?.toString()}
        className="pl-10 bg-background text-foreground rounded-full"
      />
    </div>
  )
}