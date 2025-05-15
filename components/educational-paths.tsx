import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

const paths = [
  {
    id: 1,
    name: "Oddział przygotowania wojskowego - technik logistyk - technik pojazdów samochodowych",
    image: "/kierunki/wojsko.jpg",
    href: "/paths/oddzial-przygotowania-wojskowego",
  },
  {
    id: 2,
    name: "Technik reklamy",
    image: "/kierunki/reklama.jpeg",
    href: "/paths/technik-reklamy",
  },
  {
    id: 3,
    name: "Technik ekonomista",
    image: "/kierunki/ekonomista.jpg",
    href: "/paths/ekonomista",
  },
  {
    id: 4,
    name: "Technik hotelarstwa",
    image: "/kierunki/hotel.jpg",
    href: "/paths/hotelarz",
  },
  {
    id: 5,
    name: "Technik informatyk",
    image: "/kierunki/informatyk.jpg",
    href: "/paths/informatyk",
  },
  {
    id: 6,
    name: "Technik logistyk",
    image: "/kierunki/logistyk.jpg",
    href: "/paths/logistyk",
  },
  {
    id: 7,
    name: "Technik pojazdów samochodowych",
    image: "/kierunki/mechanik.jpg",
    href: "/paths/mechanik",
  },
  {
    id: 8,
    name: "LO o profilu medyczno-sportowym",
    image: "/kierunki/lomed.jpg",
    href: "/paths/lomed",
  },
  {
    id: 9,
    name: "LO o profilu policyjno-strażackim",
    image: "/kierunki/lopol.jpg",
    href: "/paths/lopol",
  },
  {
    id: 10,
    name: "Branżowa szkoła I stopnia - wielozawodowa",
    image: "/kierunki/branzowa.jpg",
    href: "/paths/branzowa",
  },
]

export function EducationalPaths() {
  return (
    <section className="container py-16">
      <h2 className="mb-12 text-center text-3xl font-bold">Kierunki kształcenia</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {paths.map((path) => (
          <div key={path.id} className="group relative aspect-[3/4] overflow-hidden rounded-lg">
            <Image
              src={path.image || "/placeholder.svg"}
              alt={path.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white text-center">
              <h3 className="text-xl font-bold mb-4">{path.name}</h3>
              <Button asChild variant={'default'}>
                <Link href={path.href}>Czytaj Dalej</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
