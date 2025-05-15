import Image from "next/image"

const partners = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  name: `Partner ${i + 1}`,
  logo: "/placeholder.svg",
}))

export function PartnersSection() {
  return (
    <section className="container py-16">
      <h2 className="mb-4 text-center text-3xl font-bold">Partnerzy</h2>
      <p className="mb-12 text-center text-lg text-muted-foreground">Dziękujemy naszym partnerom</p>
      <div className="mx-auto max-w-6xl space-y-8">
        {/* First row - 6 partners */}
        <div className="grid grid-cols-6 gap-8">
          {partners.slice(0, 6).map((partner) => (
            <div key={partner.id} className="flex items-center justify-center p-4">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={60}
                className="h-12 w-auto object-contain grayscale transition-all hover:grayscale-0"
              />
            </div>
          ))}
        </div>
        {/* Second row - 3 partners centered */}
        <div className="flex justify-center gap-8">
          {partners.slice(6, 9).map((partner) => (
            <div key={partner.id} className="flex items-center justify-center p-4">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={60}
                className="h-12 w-auto object-contain grayscale transition-all hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
