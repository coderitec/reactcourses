import './globals.css'
import { Ysabeau_Office } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const beau = Ysabeau_Office({ subsets: ['latin'], weight: ['500'] })

export const metadata = {
  title: 'Subscribe to courses on web development',
  description: 'All about web development',
  keywords: 'html, css, javascript, react, next, tailwind, typescript'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={beau.className}>
        <Header />
        <main className='min-h-[75vh]'>

          {children}
        </main>

        <Footer />
        </body>
    </html>
  )
}
