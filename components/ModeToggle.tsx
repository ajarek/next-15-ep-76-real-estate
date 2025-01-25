'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          size='icon'
          onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light')
          }}
          className='text-2xl border-none'
        >
          {theme === 'light' ? '🌜' : '🌞'}
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  )
}
