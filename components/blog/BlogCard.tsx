import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blogs";

const publicationDateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "long",
  year: "numeric",
  timeZone: "Asia/Kolkata",
});

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article
      className="tasmyaa-blog-page-card"
      aria-labelledby={`blog-post-${post.id}`}
    >
      <div className="tasmyaa-blog-page-card-image">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(max-width:600px) 100vw, (max-width:1000px) 50vw, 33vw"
        />
      </div>
      <div className="tasmyaa-blog-page-card-copy">
        <h2 id={`blog-post-${post.id}`}>
          <Link href={post.url}>{post.title}</Link>
        </h2>
        <p className="tasmyaa-blog-page-card-author">{post.author}</p>
        <time dateTime={post.publishedAt}>
          {publicationDateFormat.format(new Date(post.publishedAt))}
        </time>
        <span className="tasmyaa-blog-page-sr-only">
          Development sample article; author and publication date are fictional.{" "}
          {post.excerpt}
        </span>
      </div>
    </article>
  );
}
