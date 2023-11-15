import Image from 'next/image'
import { ModeToggle } from '@/components/mode-toggle'
import { NavigationLinks } from '@/components/navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-20">
      <ModeToggle></ModeToggle>
      <NavigationLinks></NavigationLinks>
    </main>
  )
}
