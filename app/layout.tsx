import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Celia Regalado - Creative Director Portfolio',
  description: 'Portfolio of Celia Regalado, Creative Director',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen text-foreground">
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}

