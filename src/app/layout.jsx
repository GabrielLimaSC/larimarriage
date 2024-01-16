import { Inter } from 'next/font/google'
import Header from "../components/Header"
import Head from 'next/head'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Larissa e Pedro Paulo',
  description: 'Seja bem-vindo ao nosso site!',
}

async function wait(miliseconds) {
  await new Promise(resolve => setTimeout(resolve, miliseconds))
}

export default async function RootLayout({ children }) {
  wait(3000)
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
