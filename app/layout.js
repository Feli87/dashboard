import { Inter } from 'next/font/google'
import './ui/globals.css'
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Next Js Dashboard',
  description: 'Next.js Dashboard FeliDev87',
  icons: {
    icon: '/favicon.ico',
  }
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
