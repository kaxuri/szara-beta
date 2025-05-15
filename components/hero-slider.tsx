"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Post {
  id: number
  title: string
  content: string
  slug: string
  image_url: string
  published_at: string
}

interface HeroSliderProps {
  posts: Post[]
}

export function HeroSlider({ posts }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % posts.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + posts.length) % posts.length)
  }

  // Auto-advance slides
  React.useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  if (posts.length === 0) {
    return null
  }

  // Extract a short description from the content (first 150 characters)
  const getDescription = (content: string) => {
    // Remove markdown formatting
    const plainText = content.replace(/[#*_~`]/g, "")
    return plainText.slice(0, 150) + (plainText.length > 150 ? "..." : "")
  }

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[600px] w-full">
        <Image
          src={posts[currentSlide].image_url || "/placeholder.svg"}
          alt={posts[currentSlide].title}
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">{posts[currentSlide].title}</h1>
            <p className="mb-8 text-lg text-white/90 md:text-xl">{getDescription(posts[currentSlide].content)}</p>
            <Button size="lg" variant="default" asChild>
              <Link href={`/blog/${posts[currentSlide].slug}`}>Czytaj więcej</Link>
            </Button>
          </div>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 transform bg-background/80"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 transform bg-background/80"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}
