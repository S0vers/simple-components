import type { Metadata } from 'next'
import './globals.scss'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'NextAuth Sample',
  description: 'A website that is a sample of NextAuth.js'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
