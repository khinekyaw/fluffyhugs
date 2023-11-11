'use client'
import React from 'react'
import FirstPage from '@/components/FirstPage'
import { cn } from '@/utils/cn'

const Home = () => {
  return (
    <main className={cn('w-screen h-screen overflow-hidden')}>
      <FirstPage />
    </main>
  )
}

export default Home
