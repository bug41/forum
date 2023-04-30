import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import LoginBtn from './LoginBtn'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {
  
  let session = await getServerSession(authOptions)
  console.log(session);
  
  return (
    <html lang="ko">
      <body>
        <div className="navbar"> 
          <Link href="/" className="logo">Appleforum</Link> 
          <Link href="/list">List</Link> 
          <LoginBtn/>          
        </div>  
        { children }
      </body>
    </html>
  )
}
