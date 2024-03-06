import CustomButtons from '@/components/CustomButton/CustomButton'
import CustomCard from '@/components/CustomCart'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ModeToggle } from '@/components/ui/themeButton'

export default function Home() {
  return (
    <main className='relative h-dvh w-screen'>
      <div className='absolute right-40 top-6 z-50'>
        <ModeToggle />
      </div>
      <ScrollArea className='h-dvh'>
        <div className='flex h-dvh w-full items-center justify-center align-middle'>
          <CustomCard />
        </div>
        <div className='flex h-dvh w-full items-center justify-center align-middle'>
          <CustomButtons />
        </div>
      </ScrollArea>
    </main>
  )
}
