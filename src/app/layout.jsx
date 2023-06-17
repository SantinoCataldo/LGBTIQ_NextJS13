import './globals.css'
import { Header } from './components/header'
import { Footer } from './components/footer'
import {inter, poppins } from './components/fonts'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
