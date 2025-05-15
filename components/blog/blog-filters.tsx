import Link from "next/link"
import { getTags } from "@/lib/db"
import { Badge } from "@/components/ui/badge"

export async function BlogFilters({ activeTag = "" }: { activeTag?: string }) {
  const tags = await getTags()

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Kategorie</h2>
      <div className="flex flex-wrap gap-3">
        <Link href="/blog" className={`inline-block ${!activeTag ? "pointer-events-none" : ""}`}>
          <Badge variant={!activeTag ? "default" : "outline"} className="cursor-pointer px-4 py-2 text-base">
            Wszystkie
          </Badge>
        </Link>
        {tags.map((tag) => (
          <Link
            key={tag.id}
            href={`/blog?tag=${tag.slug}`}
            className={`inline-block ${activeTag === tag.slug ? "pointer-events-none" : ""}`}
          >
            <Badge
              variant={activeTag === tag.slug ? "default" : "outline"}
              className="cursor-pointer px-4 py-2 text-base"
            >
              {tag.name}
              {tag.post_count > 0 && (
                <span className="ml-2 rounded-full bg-background/20 px-2 py-0.5 text-xs">{tag.post_count}</span>
              )}
            </Badge>
          </Link>
        ))}
      </div>
    </div>
  )
}
