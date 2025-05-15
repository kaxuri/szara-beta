import { BlogSection } from "@/components/blog-section"
import { EducationalPaths } from "@/components/educational-paths"
import { HeroSlider } from "@/components/hero-slider"
import { PartnersSection } from "@/components/partners-section"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { getPosts } from "@/lib/db"

export default async function Home() {
  // Fetch the 3 most recent blog posts for the hero slider
  const recentPosts = await getPosts(3)

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="relative">
          <HeroSlider posts={recentPosts} />
          <div className="absolute inset-x-0 top-0">
            <SiteHeader />
          </div>
        </div>
        <BlogSection />
        <EducationalPaths />
        <PartnersSection />
      </main>
      <SiteFooter />
    </div>
  )
}
