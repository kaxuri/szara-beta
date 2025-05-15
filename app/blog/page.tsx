import { Suspense } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BlogPosts } from "@/components/blog/blog-posts"
import { BlogSearch } from "@/components/blog/blog-search"
import { BlogFilters } from "@/components/blog/blog-filters"
import { Skeleton } from "@/components/ui/skeleton"

export default function BlogPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page = typeof searchParams.page === "string" ? Number.parseInt(searchParams.page) : 1
  const search = typeof searchParams.search === "string" ? searchParams.search : ""
  const tag = typeof searchParams.tag === "string" ? searchParams.tag : ""

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/20 to-primary/5 py-20">
          <div className="container mx-auto text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">Aktualności i Wydarzenia</h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Bądź na bieżąco z najnowszymi informacjami, wydarzeniami i osiągnięciami naszej szkoły.
            </p>
          </div>
        </section>

        {/* Blog Content */}
        <section className="container mx-auto py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            {/* Main content - now on the left */}
            <div className="md:col-span-8 md:order-1">
              <Suspense fallback={<BlogPostsSkeleton />}>
                <BlogPosts page={page} search={search} tag={tag} />
              </Suspense>
            </div>

            {/* Sidebar with search and filters - now on the right */}
            <div className="md:col-span-4 md:order-2">
              <div className="sticky top-24 space-y-8 rounded-xl bg-muted/50 p-6 shadow-sm">
                <BlogSearch initialSearch={search} />
                <Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
                  <BlogFilters activeTag={tag} />
                </Suspense>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

function BlogPostsSkeleton() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="flex flex-col space-y-3">
          <Skeleton className="h-[240px] w-full rounded-xl" />
          <Skeleton className="h-5 w-1/4" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-3/4" />
          <div className="flex justify-between">
            <Skeleton className="h-5 w-1/3" />
            <Skeleton className="h-5 w-1/4" />
          </div>
        </div>
      ))}
    </div>
  )
}
