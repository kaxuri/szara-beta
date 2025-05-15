import { mockPosts, mockTags } from "./mock-data"

export async function getPost(slug: string) {
  const post = mockPosts.find((p) => p.slug === slug)
  return post || null
}

export async function getPosts(limit?: number, offset = 0, search = "", tagSlug = "") {
  let filteredPosts = [...mockPosts]

  if (search) {
    const searchLower = search.toLowerCase()
    filteredPosts = filteredPosts.filter(
      (post) => post.title.toLowerCase().includes(searchLower) || post.content.toLowerCase().includes(searchLower),
    )
  }

  if (tagSlug) {
    const tag = mockTags.find((t) => t.slug === tagSlug)
    if (tag) {
      filteredPosts = filteredPosts.filter((post) => post.tag_id === tag.id)
    }
  }

  filteredPosts.sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime())

  if (limit) {
    return filteredPosts.slice(offset, offset + limit)
  }

  return filteredPosts
}

export async function getPostsCount(search = "", tagSlug = "") {
  let filteredPosts = [...mockPosts]

  if (search) {
    const searchLower = search.toLowerCase()
    filteredPosts = filteredPosts.filter(
      (post) => post.title.toLowerCase().includes(searchLower) || post.content.toLowerCase().includes(searchLower),
    )
  }

  if (tagSlug) {
    const tag = mockTags.find((t) => t.slug === tagSlug)
    if (tag) {
      filteredPosts = filteredPosts.filter((post) => post.tag_id === tag.id)
    }
  }

  return filteredPosts.length
}

export async function getTags() {
  return mockTags
}
