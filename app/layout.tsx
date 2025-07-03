import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Steve Hoang - Portfolio',
  description: 'Steve Hoang - Portfolio',
  generator: 'Steve Hoang',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
