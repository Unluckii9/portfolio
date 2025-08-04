import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Hello World!',
  description: 'Développeur logiciel',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-white text-black">
        {children}
      </body>
    </html>
  )
}