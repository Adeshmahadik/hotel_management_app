import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

// Fix the typo in the variable assignment
const poppins = Poppins({ subsets: ['latin'], weight:["400", "500", "700", "900"],
style:["italic", "normal"],
variable: "--font-poppins" })

export const metadata: Metadata = {
  title: 'Hotel Management App', // Fix the typo in the title
  description: 'Explore new life',
}

// Add the appropriate imports for inter variable or replace it with a valid className
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* Replace inter.className with a valid className or import the appropriate styles */}
      <body className={poppins.className}>
        <main className='font-normal'>

        {children}
        </main>
        
        </body>
    </html>
  )
}
