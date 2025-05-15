export interface StaffMember {
  id: number
  name: string
  role: string
  image: string
  category: "management" | "teacher" | "administration" | "service"
  subjects?: string
}

// Mock data instead of database query
export async function getStaffMembers(): Promise<StaffMember[]> {
  return [
    { id: 1, name: "mgr Anna Kowalska", role: "Dyrektor Szkoły", image: "/placeholder.svg", category: "management" },
    {
      id: 2,
      name: "dr Jan Nowak",
      role: "Wicedyrektor ds. Dydaktycznych",
      image: "/placeholder.svg",
      category: "management",
    },
    {
      id: 3,
      name: "mgr Piotr Wiśniewski",
      role: "Wicedyrektor ds. Wychowawczych",
      image: "/placeholder.svg",
      category: "management",
    },
    {
      id: 4,
      name: "mgr Katarzyna Dąbrowska",
      role: "Nauczyciel",
      subjects: "Język polski",
      image: "/placeholder.svg",
      category: "teacher",
    },
    {
      id: 5,
      name: "mgr inż. Tomasz Lewandowski",
      role: "Nauczyciel",
      subjects: "Matematyka",
      image: "/placeholder.svg",
      category: "teacher",
    },
    {
      id: 6,
      name: "dr Magdalena Kamińska",
      role: "Nauczyciel",
      subjects: "Biologia",
      image: "/placeholder.svg",
      category: "teacher",
    },
    {
      id: 7,
      name: "mgr Michał Zieliński",
      role: "Nauczyciel",
      subjects: "Historia",
      image: "/placeholder.svg",
      category: "teacher",
    },
    {
      id: 8,
      name: "mgr Agnieszka Szymańska",
      role: "Nauczyciel",
      subjects: "Język angielski",
      image: "/placeholder.svg",
      category: "teacher",
    },
    {
      id: 9,
      name: "mgr Robert Woźniak",
      role: "Nauczyciel",
      subjects: "Wychowanie fizyczne",
      image: "/placeholder.svg",
      category: "teacher",
    },
    {
      id: 10,
      name: "mgr inż. Aleksandra Kaczmarek",
      role: "Nauczyciel",
      subjects: "Informatyka",
      image: "/placeholder.svg",
      category: "teacher",
    },
    {
      id: 11,
      name: "mgr Marcin Piotrowski",
      role: "Nauczyciel",
      subjects: "Geografia",
      image: "/placeholder.svg",
      category: "teacher",
    },
    {
      id: 12,
      name: "Barbara Michalska",
      role: "Sekretarz Szkoły",
      image: "/placeholder.svg",
      category: "administration",
    },
    { id: 13, name: "Krzysztof Adamczyk", role: "Księgowy", image: "/placeholder.svg", category: "administration" },
    {
      id: 14,
      name: "Joanna Nowicka",
      role: "Specjalista ds. Kadr",
      image: "/placeholder.svg",
      category: "administration",
    },
    { id: 15, name: "Stanisław Pawlak", role: "Konserwator", image: "/placeholder.svg", category: "service" },
    { id: 16, name: "Teresa Jabłońska", role: "Woźna", image: "/placeholder.svg", category: "service" },
    { id: 17, name: "Marek Wróbel", role: "Dozorca", image: "/placeholder.svg", category: "service" },
  ]
}
