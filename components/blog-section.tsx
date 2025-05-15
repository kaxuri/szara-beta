import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { getPosts } from "@/lib/db"

export async function BlogSection() {
  const posts = await getPosts(12)

  return (
    <section className="container py-16">
      <h2 className="mb-12 text-center text-3xl font-bold">Wiadomości</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <Image
                src={post.image_url || "/placeholder.svg"}
                alt={post.title}
                width={400}
                height={200}
                className="h-48 w-full object-cover"
              />
            </CardHeader>
            <CardContent className="p-4">
              <div className="mb-2">
                <span className="inline-block rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">
                  {post.tag_name}
                </span>
              </div>
              <h3 className="mb-2 line-clamp-2 text-lg font-semibold">{post.title}</h3>
              <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{post.content.slice(0, 150)}...</p>
              <div className="flex items-center gap-2">
                <Image
                  src={post.author_avatar || "/placeholder.svg"}
                  alt={post.author_name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm font-medium">{post.author_name}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(post.published_at).toLocaleDateString("pl-PL")}
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-sm text-primary hover:underline"
              >
                <ArrowRight className="mr-1 h-4 w-4" />
                Czytaj więcej
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button size="lg" asChild>
          <Link href="/blog">Zobacz więcej wiadomości</Link>
        </Button>
      </div>
    </section>
  )
}
