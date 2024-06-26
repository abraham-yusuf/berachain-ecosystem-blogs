// TODO: move ghost a route to the api folder
import GhostContentAPI from "@tryghost/content-api"

const api = new GhostContentAPI({
  url: process.env.NEXT_PUBLIC_GHOST_API_URL,
  key: process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY,
  version: "v5.0",
})

export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all",
      include: "tags,authors",
    })
    .catch((err) => {
      console.error(err)
    })
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
      include: "tags,authors",
    })
    .catch((err) => {
      console.error(err)
    })
}
