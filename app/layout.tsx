import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './ui/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Blog de noticias',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <html lang="en">
                <body className={`${inter.className}`}>
                    <div className="bg-gradient-to-b from-gray-50 to-gray-50 text-black">
                        <Header />
                        {children}
                    </div>
                </body>
            </html>
        </>
    )
}
