import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'

const open_Sans = Open_Sans({ subsets: ['latin'],
weight: ['700','500', '600','800','400' ]})

export const metadata: Metadata = {
  title: 'THSC SYSTEM',
  description: 'Solution to system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={open_Sans.className}>{children}</body>
    </html>
  )
}
