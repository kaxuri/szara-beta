"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function BlogSearch({ initialSearch = "" }: { initialSearch?: string }) {
  const [search, setSearch] = useState(initialSearch)
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (search) params.set("search", search)
    router.push(`/blog?${params.toString()}`)
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Szukaj</h2>
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3.5 top-3.5 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Szukaj artykułów..."
            className="h-12 pl-10 text-base"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Button type="submit" className="w-full h-12 text-base">
          Szukaj
        </Button>
      </form>
    </div>
  )
}
