import Navbar from '@/components/navbar/Navbar'
import './globals.css'

export const metadata = {
  title: 'STAS3 | Status',
  description: 'coded by alex',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
