import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"
import { pl } from "date-fns/locale"
import { Calendar, User } from "lucide-react"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"

import { SiteHeader } from "@/components/site-header"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getPost, getPosts } from "@/lib/db"

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  const otherPosts = await getPosts(3)

  if (!post) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <article className="container mx-auto py-12">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-2">
              {post.tag_name}
            </Badge>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">{post.title}</h1>
            <div className="flex items-center space-x-4 text-muted-foreground">
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                <span>{post.author_name}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <time dateTime={post.published_at}>
                  {format(new Date(post.published_at), "d MMMM yyyy", { locale: pl })}
                </time>
              </div>
            </div>
          </div>
          <div className="relative mb-8 h-[400px] overflow-hidden rounded-lg">
            <Image src={post.image_url || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          </div>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
                h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />,
                h3: ({ node, ...props }) => <h3 className="text-xl font-bold mt-4 mb-2" {...props} />,
                p: ({ node, ...props }) => <p className="mb-4" {...props} />,
                ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-4" {...props} />,
                ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-4" {...props} />,
                li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                a: ({ node, ...props }) => <a className="text-blue-600 hover:underline" {...props} />,
                blockquote: ({ node, ...props }) => (
                  <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props} />
                ),
                code: ({ node, inline, ...props }) =>
                  inline ? (
                    <code className="bg-gray-100 rounded px-1 py-0.5" {...props} />
                  ) : (
                    <code className="block bg-gray-100 rounded p-2 my-2 overflow-x-auto" {...props} />
                  ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
        <section className="bg-muted py-12">
          <div className="container mx-auto">
            <h2 className="mb-8 text-3xl font-bold">Inne artykuły</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherPosts
                .filter((p) => p.slug !== params.slug)
                .map((otherPost) => (
                  <Card key={otherPost.slug} className="overflow-hidden">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={otherPost.image_url || "/placeholder.svg"}
                        alt={otherPost.title}
                        width={300}
                        height={200}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4">
                      <Badge variant="secondary" className="mb-2">
                        {otherPost.tag_name}
                      </Badge>
                      <h3 className="mb-2 text-xl font-semibold">
                        <Link href={`/blog/${otherPost.slug}`} className="hover:underline">
                          {otherPost.title}
                        </Link>
                      </h3>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{otherPost.author_name}</span>
                        <time dateTime={otherPost.published_at}>
                          {format(new Date(otherPost.published_at), "d MMM yyyy", { locale: pl })}
                        </time>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
