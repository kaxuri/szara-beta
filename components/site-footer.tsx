import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube } from "lucide-react"

const footerLinks = [
  { name: "O nas", href: "/about" },
  { name: "Kontakt", href: "/contact" },
  { name: "Polityka prywatności", href: "/privacy" },
]

const socialLinks = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "Youtube", href: "#", icon: Youtube },
]

export function SiteFooter() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex gap-4">
            {footerLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                {link.name}
              </Link>
            ))}
          </div>
          <Link href="/" className="flex items-center gap-2">
            <Image src="/placeholder.svg" alt="Logo" width={32} height={32} className="h-8 w-8" />
          </Link>
          <div className="flex gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link key={link.name} href={link.href} className="text-muted-foreground hover:text-primary">
                  <Icon className="h-5 w-5" />
                </Link>
              )
            })}
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Zespół Szkół. Wszelkie prawa zastrzeżone.
          <br />
          <span className="text-xs">Wersja: {process.env.NEXT_PUBLIC_APP_VERSION}</span>
        </div>
      </div>
    </footer>
  )
}
