'use client'
import React, { Children, ProviderProps } from 'react'
import { ThemeProvider } from 'next-themes'

interface providerProps {
    children:any;
}

export default function Provider({children}: providerProps) {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
        <div className='text-grey-700 dark:text-grey-200 dark: bg-grey-700 min-h-screen select-none transition-colors duration-300'>
            {children}
        </div>
    </ThemeProvider>
  )
}
