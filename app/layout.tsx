import { Metadata } from 'next'
import { Footer } from '../components/footer'
import { Introduction } from '../components/introduction'
import { LinkType } from '../components/link'
import { Navbar } from '../components/navbar'
import '../styles/global.css'

const links: LinkType[] = [
  {
    href: '/recipes',
    children: 'Recipes',
  },
  {
    href: '/create-recipe',
    children: 'Create recipe',
  },
]

const userLinks: LinkType[] = [
  {
    href: '/tokens',
    children: 'Buy tokens',
  },
]

const moreLinks: LinkType[] = [
  {
    href: 'https://tasteoftrail.com',
    children: 'Taste of Trail',
    _target: '_blank',
  },
  {
    href: 'https://marketplace.visualstudio.com/items?itemName=henriknh.lfw-codes-for-bananas',
    children: 'LFW: Codes for bananas',
    _target: '_blank',
  },
  {
    href: 'https://play.google.com/store/apps/details?id=com.henriknh.addzelines',
    children: 'add ze lines (google play)',
    _target: '_blank',
  },
  {
    href: 'https://henriknh.itch.io/add-ze-lines',
    children: 'add ze lines (itch)',
    _target: '_blank',
  },
]

export const metadata: Metadata = {
  title: 'as easy as pie',
}
interface RootProps {
  children: React.ReactNode
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: RootProps) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-base-100">
        <Navbar links={links} profileDropdownLinks={userLinks}>
          {children}

          <Footer
            links={links}
            moreLinks={moreLinks}
            bottomSlot={<Introduction />}
          />
        </Navbar>
      </body>
    </html>
  )
}
