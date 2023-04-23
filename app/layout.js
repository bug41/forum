import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <div className="navbar"> 
          <Link href="/" className="logo">Appleforum</Link> 
          <Link href="/list">List</Link> 
        </div>  
        { children }
      </body>
    </html>
  )
}
