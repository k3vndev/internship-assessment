import type { Metadata } from 'next'
import './globals.css'
import { AppFooter, AppHeader } from '@components'
import { APP_FONTS_VARIABLES } from '@consts'

export const metadata: Metadata = {
  title: "Kevin's Store",
  description: 'Your one-stop shop for everything!',
  icons: {
    icon: '/shopping-cart.webp'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={`h-full antialiased ${APP_FONTS_VARIABLES}`}>
      <body className='flex flex-col font-plus min-h-dvh bg-mauve-100'>
        <AppHeader />
        {children}
        <AppFooter />
      </body>
    </html>
  )
}
