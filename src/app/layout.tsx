import WrapApp from './WrapApp'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '대한 유도 & 주짓수',
  description: '대한 유도 & 주짓수 출석 및 관리를 위한 시스템',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
        <WrapApp>
          {children}
        </WrapApp>
      {/* </body> */}
    </html>
  )
}
