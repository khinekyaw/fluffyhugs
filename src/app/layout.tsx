import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://fluffyhugs-alpha.vercel.app'),
  title: 'Fluffy HUGS NFT',
  description:
    'ふわふわのどうぶつたちに、囲まれて暮らしたい。ペットや動物が大好きなあなたのためのコミュニティ。 FluffyHUGSは、「大好きな動物と一緒に、あなたらしさを表現する」ことをコンセプトに3,333体のジェネラティブアートNFTで構成され、世界中にコミュニティの輪を広げて参ります。',
  openGraph: {
    title: 'Fluffy HUGS NFT',
    description:
      'ふわふわのどうぶつたちに、囲まれて暮らしたい。ペットや動物が大好きなあなたのためのコミュニティ。 FluffyHUGSは、「大好きな動物と一緒に、あなたらしさを表現する」ことをコンセプトに3,333体のジェネラティブアートNFTで構成され、世界中にコミュニティの輪を広げて参ります',
    images: ['/ogp.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
