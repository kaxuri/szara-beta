import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { StaffSection } from "@/components/kadra/staff-section"
import { getStaffMembers } from "@/lib/staff"

export default async function KadraPage() {
  // Fetch staff members from the database or API
  const staffMembers = await getStaffMembers()

  // Separate staff members by category
  const management = staffMembers.filter((member) => member.category === "management")
  const teachers = staffMembers.filter((member) => member.category === "teacher")
  const administration = staffMembers.filter((member) => member.category === "administration")
  const service = staffMembers.filter((member) => member.category === "service")

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-[120px]">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/20 to-primary/5 py-16">
          <div className="container mx-auto text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Kadra Szkoły</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Poznaj zespół profesjonalistów, którzy każdego dnia dbają o edukację i rozwój naszych uczniów.
            </p>
          </div>
        </section>

        {/* Management Section */}
        <StaffSection
          title="Dyrekcja"
          description="Zespół zarządzający szkołą, odpowiedzialny za jej rozwój i funkcjonowanie."
          staffMembers={management}
        />

        {/* Teachers Section */}
        <StaffSection
          title="Nauczyciele"
          description="Wykwalifikowana kadra pedagogiczna z bogatym doświadczeniem dydaktycznym."
          staffMembers={teachers}
          background="bg-muted/30"
        />

        {/* Administration Section */}
        <StaffSection
          title="Administracja"
          description="Zespół dbający o sprawne funkcjonowanie szkoły od strony organizacyjnej."
          staffMembers={administration}
        />

        {/* Service Section */}
        <StaffSection
          title="Pracownicy Obsługi"
          description="Osoby dbające o komfort i bezpieczeństwo w naszej szkole."
          staffMembers={service}
          background="bg-muted/30"
        />
      </main>
      <SiteFooter />
    </div>
  )
}
