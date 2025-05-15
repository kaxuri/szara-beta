import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"
import { pl } from "date-fns/locale"
import { ArrowRight, Calendar } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getPosts, getPostsCount } from "@/lib/db"
import { BlogPagination } from "./blog-pagination"

const POSTS_PER_PAGE = 6

export async function BlogPosts({
  page = 1,
  search = "",
  tag = "",
}: {
  page?: number
  search?: string
  tag?: string
}) {
  const posts = await getPosts(POSTS_PER_PAGE, (page - 1) * POSTS_PER_PAGE, search, tag)
  const totalPosts = await getPostsCount(search, tag)
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE)

  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl bg-muted/30 py-16 text-center">
        <h3 className="mb-4 text-2xl font-bold">Nie znaleziono artykułów</h3>
        <p className="mb-8 text-muted-foreground">
          Spróbuj zmienić kryteria wyszukiwania lub przeglądaj wszystkie artykuły.
        </p>
        <Button asChild size="lg">
          <Link href="/blog">Wszystkie artykuły</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-12">
      <div className="grid gap-8 sm:grid-cols-2">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
            <CardHeader className="p-0">
              <div className="relative h-[240px] w-full overflow-hidden">
                <Image
                  src={post.image_url || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary/90 hover:bg-primary">{post.tag_name}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <h3 className="mb-3 text-xl font-bold leading-tight hover:text-primary">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h3>
              <p className="mb-4 line-clamp-2 text-muted-foreground">{post.content.slice(0, 150)}...</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    src={post.author_avatar || "/placeholder.svg"}
                    alt={post.author_name}
                    width={36}
                    height={36}
                    className="rounded-full"
                  />
                  <span className="text-sm font-medium">{post.author_name}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="mr-1 h-4 w-4" />
                  <time dateTime={post.published_at}>
                    {format(new Date(post.published_at), "d MMM yyyy", { locale: pl })}
                  </time>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t bg-muted/20 p-6">
              <Link
                href={`/blog/${post.slug}`}
                className="group inline-flex items-center text-sm font-medium text-primary"
              >
                Czytaj więcej
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      {totalPages > 1 && <BlogPagination currentPage={page} totalPages={totalPages} search={search} tag={tag} />}
    </div>
  )
}
