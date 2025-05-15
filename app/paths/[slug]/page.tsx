import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Check, ArrowRight, Users, BookOpen, Briefcase } from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// This would typically come from a database or API
const paths = [
  {
    slug: "oddzial-przygotowania-wojskowego",
    name: "Oddział Przygotowania Wojskowego",
    image: "/placeholder.svg", // Replace with actual image
    description:
      "Oddział Przygotowania Wojskowego to innowacyjny program edukacyjny, który łączy standardową edukację techniczną z przygotowaniem do służby w Siłach Zbrojnych Rzeczypospolitej Polskiej. Program skierowany jest do absolwentów szkół podstawowych, zarówno dziewcząt jak i chłopców, którzy są zainteresowani karierą w służbach mundurowych.",
    pros: [
      "Bezpłatne umundurowanie dzięki dotacjom z MON",
      "Dodatkowe punkty podczas rekrutacji na uczelnie wojskowe",
      "Ułatwienia w rekrutacji do służby wojskowej",
      "Możliwość odbycia skróconej służby przygotowawczej",
      "Preferencje w naborze do WOT i innych rodzajów służby wojskowej",
      "Możliwość zdobycia państwowych uprawnień strzeleckich",
    ],
    career: [
      "Służba zawodowa w Siłach Zbrojnych RP",
      "Technik logistyk w wojsku",
      "Technik pojazdów samochodowych w wojsku",
      "Żołnierz Wojsk Obrony Terytorialnej",
      "Studia na uczelniach wojskowych",
    ],
    stats: {
      duration: 5,
      specializations: 2,
      classSize: 30,
    },
    additionalInfo: [
      {
        title: "Specjalizacje",
        content: "Technik logistyk, Technik pojazdów samochodowych",
      },
      {
        title: "Przedmioty rozszerzone",
        content: "Geografia (technik logistyk), Fizyka (technik pojazdów samochodowych)",
      },
      {
        title: "Języki obce",
        content: "Język angielski, Język rosyjski",
      },
      {
        title: "Warunki przyjęcia",
        content: [
          "Bardzo dobry stan zdrowia potwierdzony orzeczeniem lekarskim",
          "Pisemna zgoda rodziców",
          "Pozytywny wynik próby sprawności fizycznej",
        ],
      },
    ],
  },
  // Add other paths here...
]

export default function PathPage({ params }: { params: { slug: string } }) {
  const path = paths.find((p) => p.slug === params.slug)

  if (!path) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="relative h-[400px] overflow-hidden">
          <Image src={path.image || "/placeholder.svg"} alt={path.name} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/20" />
          <div className="absolute bottom-0 left-0 p-8">
            <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">{path.name}</h1>
          </div>
        </div>
        <div className="container mx-auto py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Opis kierunku</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed text-gray-700">{path.description}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Dlaczego warto wybrać ten kierunek?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {path.pros.map((pro, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 shrink-0 text-green-500" />
                        <span className="text-gray-700">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              {path.additionalInfo.map((info, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {Array.isArray(info.content) ? (
                      <ul className="list-disc pl-5 space-y-2">
                        {info.content.map((item, idx) => (
                          <li key={idx} className="text-gray-700">
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-700">{info.content}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Perspektywy zawodowe</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {path.career.map((job, index) => (
                      <li key={index} className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                        <span>{job}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Statystyki kierunku</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center">
                      <BookOpen className="h-8 w-8 text-primary mb-2" />
                      <span className="text-2xl font-bold">{path.stats.duration} lat</span>
                      <span className="text-sm text-gray-500">Czas trwania</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Briefcase className="h-8 w-8 text-primary mb-2" />
                      <span className="text-2xl font-bold">{path.stats.specializations}</span>
                      <span className="text-sm text-gray-500">Specjalizacje</span>
                    </div>
                    <div className="flex flex-col items-center col-span-2">
                      <Users className="h-8 w-8 text-primary mb-2" />
                      <span className="text-2xl font-bold">{path.stats.classSize}</span>
                      <span className="text-sm text-gray-500">Uczniów w klasie</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 py-12">
          <div className="container mx-auto">
            <h2 className="mb-8 text-3xl font-bold">Inne kierunki kształcenia</h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {paths
                .filter((p) => p.slug !== params.slug)
                .map((otherPath) => (
                  <Link
                    key={otherPath.slug}
                    href={`/paths/${otherPath.slug}`}
                    className="group block overflow-hidden rounded-lg bg-white shadow transition-all hover:shadow-lg"
                  >
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={otherPath.image || "/placeholder.svg"}
                        alt={otherPath.name}
                        width={300}
                        height={200}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex items-center justify-between p-4">
                      <span className="font-semibold">{otherPath.name}</span>
                      <ChevronRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
