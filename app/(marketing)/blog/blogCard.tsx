import Image from "next/image"
import Link from "next/link"
import { Post } from "@/types"

import { formatDate } from "@/lib/utils"
import { Icons } from "@/components/icons"

interface BlogCardProps {
  post: Post
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <>
      <Link href={`/blog/${post.slug}`}>
        <article
          key={post.id}
          className="group relative flex flex-col space-y-2 overflow-hidden"
        >
          {post.feature_image && (
            <Image
              src={post.feature_image}
              alt={post.title}
              width={804}
              height={452}
              className="rounded-md border bg-muted transition-colors"
            />
          )}
          <div className="text-3xl font-extrabold xl:text-4xl">
            {post.title}
          </div>

          {post.authors?.length ? (
            <div className="flex space-x-4 py-4">
              {post.authors.map((author) =>
                author ? (
                  <div
                    key={author.id}
                    className="flex items-center space-x-2 text-sm gap-4"
                  >
                    {author?.profile_image ? (
                      <Image
                        src={author?.profile_image ?? "/avatar.png"}
                        alt={author?.name}
                        width={36}
                        height={36}
                        className="rounded-full bg-white"
                      />
                    ) : (
                      <Icons.user className="h-8 w-8 rounded-full bg-white" />
                    )}
                    <div className="flex-1 text-left leading-tight">
                      <div className="mb-0 text-[12px] font-medium">
                        {author.name}
                      </div>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          ) : null}
          {/* {post.excerpt && (
                <p className="text-muted-foreground">{post.excerpt}</p>
              )} */}
          {post.published_at && (
            <div className="text-sm text-muted-foreground">
              {formatDate(post.published_at)}
            </div>
          )}
        </article>
      </Link>
    </>
  )
}
