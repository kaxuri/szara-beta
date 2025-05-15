"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Strona Główna", href: "/" },
  {
    name: "Uczniowie i Rodzice",
    megaMenu: {
      sections: [
        {
          title: "Dla Uczniów",
          links: [
            { name: "Plan lekcji", href: "/plan-lekcji" },
            { name: "Podręczniki", href: "/podreczniki" },
            { name: "Koła zainteresowań", href: "/kola-zainteresowan" },
            { name: "Konkursy", href: "/konkursy" },
          ],
        },
        {
          title: "Dla Rodziców",
          links: [
            { name: "Zebrania", href: "/zebrania" },
            { name: "Konsultacje", href: "/konsultacje" },
            { name: "Rada Rodziców", href: "/rada-rodzicow" },
            { name: "Wsparcie psychologiczne", href: "/wsparcie-psychologiczne" },
          ],
        },
        {
          title: "Dokumenty",
          links: [
            { name: "Regulamin szkoły", href: "/regulamin" },
            { name: "Statut", href: "/statut" },
            { name: "Procedury", href: "/procedury" },
            { name: "Formularze", href: "/formularze" },
          ],
        },
      ],
    },
  },
  {
    name: "O nas",
    megaMenu: {
      sections: [
        {
          title: "Szkoła",
          links: [
            { name: "Historia", href: "/historia" },
            { name: "Misja i wizja", href: "/misja-wizja" },
            { name: "Patron", href: "/patron" },
          ],
        },
        {
          title: "Ludzie",
          links: [
            { name: "Dyrekcja", href: "/dyrekcja" },
            { name: "Kadra", href: "/kadra" },
            { name: "Samorząd uczniowski", href: "/samorzad" },
          ],
        },
        {
          title: "Kontakt",
          links: [
            { name: "Dane teleadresowe", href: "/kontakt" },
            { name: "Sekretariat", href: "/sekretariat" },
            { name: "Dojazd", href: "/dojazd" },
          ],
        },
      ],
    },
  },
  {
    name: "Kierunki kształcenia",
    megaMenu: {
      sections: [
        {
          title: "Technikum",
          links: [
            { name: "Technik Reklamy", href: "/paths/technik-reklamy" },
            { name: "Technik Ekonomista", href: "/paths/technik-ekonomista" },
            { name: "Technik Hotelarstwa", href: "/paths/technik-hotelarstwa" },
            { name: "Technik Informatyk", href: "/paths/technik-informatyk" },
          ],
        },
        {
          title: "Liceum",
          links: [
            { name: "Liceum Medyczno-Sportowe", href: "/paths/liceum-medyczno-sportowe" },
            { name: "Liceum Policyjno-Strażackie", href: "/paths/liceum-policyjno-strazackie" },
          ],
        },
        {
          title: "Informacje",
          links: [
            { name: "Rekrutacja", href: "/recruitment" },
            { name: "Praktyki zawodowe", href: "/praktyki" },
            { name: "Egzaminy zawodowe", href: "/egzaminy" },
          ],
        },
      ],
    },
  },
  { name: "Projekty", href: "/projects" },
  { name: "E-szkoła", href: "/e-school" },
  { name: "Bezpieczeństwo", href: "/safety" },
  { name: "Blog", href: "/blog" },
]

export function SiteHeader() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isAboutPage = pathname === "/about"

  return (
    <header
      className={`fixed top-0 left-1/2 z-50 w-full max-w-[1100px] -translate-x-1/2 px-4 ${isAboutPage ? "bg-transparent" : ""}`}
    >
      <nav
        className={`w-full mt-5 h-[90px] rounded-[10px] flex items-center justify-between px-5 ${isAboutPage ? "bg-transparent" : "shadow-md backdrop-blur-lg bg-[#0000004f]"}`}
      >
        <div className="flex items-center gap-4">
          <Link href={"/"}>
            <Image src="/logo.svg" alt="Logo SZARA" width={40} height={40} className="h-10 w-auto" />
          </Link>
          <Link
            href={
              "https://sip.lex.pl/akty-prawne/dzu-dziennik-ustaw/godlo-barwy-i-hymn-rzeczypospolitej-polskiej-oraz-pieczecie-16790497/art-2-a"
            }
            target="_blank"
          >
            <Image src="/godlo.svg" alt="Godło Polski" width={32} height={40} className="h-10 w-auto" />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setActiveMenu(item.name)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              {item.href ? (
                <Link href={item.href} className="text-sm font-medium text-white transition-colors hover:text-white/80">
                  {item.name}
                </Link>
              ) : (
                <button className="text-sm font-medium text-white transition-colors hover:text-white/80">
                  {item.name}
                </button>
              )}
            </div>
          ))}
        </div>
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {activeMenu && navigation.find((item) => item.name === activeMenu)?.megaMenu && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-[90px] w-full rounded-b-lg bg-white/95 shadow-lg backdrop-blur-sm z-50"
            onMouseEnter={() => setActiveMenu(activeMenu)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="container mx-auto p-6">
              <div className="grid grid-cols-3 gap-8">
                {navigation
                  .find((item) => item.name === activeMenu)
                  ?.megaMenu?.sections.map((section, index) => (
                    <div key={index} className="space-y-4">
                      <h3 className="text-lg font-semibold text-primary">{section.title}</h3>
                      <ul className="space-y-2">
                        {section.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <Link
                              href={link.href}
                              className="block rounded-md px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-[100px] left-0 w-full bg-[#0000004f] shadow-lg backdrop-blur-lg p-5"
          >
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.href && !item.megaMenu ? (
                    <Link href={item.href} className="text-white text-lg block py-2">
                      {item.name}
                    </Link>
                  ) : (
                    <details className="group">
                      <summary className="text-white text-lg cursor-pointer py-2">{item.name}</summary>
                      <div className="pl-4 mt-2 space-y-4">
                        {item.megaMenu?.sections.map((section, sectionIndex) => (
                          <div key={sectionIndex} className="space-y-2">
                            <h4 className="text-white/80 font-medium">{section.title}</h4>
                            <ul className="space-y-1 pl-2">
                              {section.links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                  <Link href={link.href} className="block text-white/70 py-1 hover:text-white">
                                    {link.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </details>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
