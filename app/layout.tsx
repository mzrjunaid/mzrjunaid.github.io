import { Footer, Navbar } from '@/components'
import { montserrat, anton } from './fonts'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Junaid Mazhar - Portfolio',
  description: 'Hi, I am Junaid Mazhar, I develop Websites Front-End with (React, Nextjs, Bootstrap, Tailwind) and Mobile Applications with React Native',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${anton.variable} ${montserrat.variable} text-white relative`}>
      <body className='bg-gradient-to-r from-blue-400 to-teal-400 via-purple-600 animate-gradient-x'>
        <Navbar />
        <main className='font-montserrat'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
