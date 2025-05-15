import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import type { StaffMember } from "@/lib/staff"

interface StaffCardProps {
  member: StaffMember
}

export function StaffCard({ member }: StaffCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md group">
      <div className="aspect-square relative overflow-hidden bg-muted">
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-4 text-center">
        <h3 className="font-bold text-lg">{member.name}</h3>
        <p className="text-primary">{member.role}</p>
        {member.subjects && <p className="text-sm text-muted-foreground mt-1">{member.subjects}</p>}

        {/* Contact info - could be added if available */}
        {/*
        <div className="mt-3 pt-3 border-t flex justify-center space-x-4">
          <a href={`mailto:${member.email}`} className="text-muted-foreground hover:text-primary">
            <Mail size={18} />
          </a>
          <a href={`tel:${member.phone}`} className="text-muted-foreground hover:text-primary">
            <Phone size={18} />
          </a>
        </div>
        */}
      </CardContent>
    </Card>
  )
}
