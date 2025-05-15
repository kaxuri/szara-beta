import { StaffCard } from "@/components/kadra/staff-card"
import type { StaffMember } from "@/lib/staff"

interface StaffSectionProps {
  title: string
  description: string
  staffMembers: StaffMember[]
  background?: string
}

export function StaffSection({ title, description, staffMembers, background = "" }: StaffSectionProps) {
  return (
    <section className={`py-16 ${background}`}>
      <div className="container mx-auto">
        <h2 className="mb-3 text-3xl font-bold text-center">{title}</h2>
        <p className="mb-12 text-center text-muted-foreground max-w-3xl mx-auto">{description}</p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {staffMembers.map((member) => (
            <StaffCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}
