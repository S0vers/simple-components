import CustomButtons from '@/components/CustomButton/CustomButton'
import CustomCard from '@/components/CustomCart'
import ScrollParagraph from '@/components/ScrollParagraph/ScrollParagraph'
import Word from '@/components/ScrollParagraph/Word'
import CartDetails from '@/components/ui/CartDetails'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ModeToggle } from '@/components/ui/themeButton'

const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`

export default function Home() {
  return (
    <main className='relative h-dvh w-screen'>
      <div className='absolute right-40 top-6 z-50'>
        <ModeToggle />
      </div>
      {/* <div className='flex h-dvh w-full items-center justify-center overflow-hidden align-middle'></div>
      <div className='flex h-dvh w-full items-center justify-center overflow-hidden align-middle'>
        <ScrollParagraph value={paragraph} />
      </div> */}
      <ScrollArea className='h-dvh'>
        <div className='flex h-dvh w-full items-center justify-center align-middle'>
          <CustomCard />
        </div>
        <div className='flex h-dvh w-full items-center justify-center align-middle'>
          <CustomButtons />
        </div>
        <div className='flex h-dvh w-full items-center justify-center align-middle'>
          <CartDetails />
        </div>
        {/* <div className='flex h-dvh w-full items-center justify-center align-middle'>
          <ScrollParagraph value={paragraph} />
        </div> */}
      </ScrollArea>
    </main>
  )
}
