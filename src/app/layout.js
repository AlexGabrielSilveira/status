import Navbar from '@/components/navbar/Navbar'
import './globals.css'

export const metadata = {
  title: 'Status',
  description: 'coded by alex',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        {children}
        </body>
    </html>
  )
}
