import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DevX',
  description: 'DevX allows developers to build their personal portfolios, share their experiences, skills, projects, and other achievements in their coding journey',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta property="og:image" content="https://res.cloudinary.com/db7wwc9ex/image/upload/v1699460432/introHero2_gfhawm.svg" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:title" content="DevX" />
        <meta property="og:description" content="DevX allows developers to build their personal portfolios, share their experiences, skills, projects, and other achievements in their coding journey" />
        <meta property="og:url" content="https://devxx.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DevX" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
