"use client"

import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function BlogPagination({
  currentPage,
  totalPages,
  search = "",
  tag = "",
}: {
  currentPage: number
  totalPages: number
  search?: string
  tag?: string
}) {
  const getPageUrl = (page: number) => {
    const params = new URLSearchParams()
    params.set("page", page.toString())
    if (search) params.set("search", search)
    if (tag) params.set("tag", tag)
    return `/blog?${params.toString()}`
  }

  return (
    <div className="flex items-center justify-center space-x-3 py-8">
      <Button
        variant="outline"
        size="lg"
        className="h-12 w-12 rounded-full p-0"
        disabled={currentPage <= 1}
        asChild={currentPage > 1}
      >
        {currentPage > 1 ? (
          <Link href={getPageUrl(currentPage - 1)}>
            <ChevronLeft className="h-5 w-5" />
          </Link>
        ) : (
          <span>
            <ChevronLeft className="h-5 w-5" />
          </span>
        )}
      </Button>
      <div className="flex items-center space-x-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
          // Show first page, last page, and pages around current page
          if (page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
            return (
              <Button
                key={page}
                variant={page === currentPage ? "default" : "outline"}
                size="lg"
                className={`h-12 w-12 rounded-full p-0 ${page === currentPage ? "shadow-md" : ""}`}
                asChild={page !== currentPage}
              >
                {page !== currentPage ? <Link href={getPageUrl(page)}>{page}</Link> : <span>{page}</span>}
              </Button>
            )
          }

          // Show ellipsis for gaps
          if (page === currentPage - 2 || page === currentPage + 2) {
            return (
              <span key={page} className="px-2 text-muted-foreground">
                •••
              </span>
            )
          }

          return null
        })}
      </div>
      <Button
        variant="outline"
        size="lg"
        className="h-12 w-12 rounded-full p-0"
        disabled={currentPage >= totalPages}
        asChild={currentPage < totalPages}
      >
        {currentPage < totalPages ? (
          <Link href={getPageUrl(currentPage + 1)}>
            <ChevronRight className="h-5 w-5" />
          </Link>
        ) : (
          <span>
            <ChevronRight className="h-5 w-5" />
          </span>
        )}
      </Button>
    </div>
  )
}
