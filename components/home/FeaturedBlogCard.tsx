import Image from "next/image";
import { featuredBlog } from "@/data/blogs";

export default function FeaturedBlogCard() {
  return (
    <article
      className="tasmyaa-featured-blog"
      aria-labelledby="featured-blog-title"
    >
      <div className="tasmyaa-featured-blog-image">
        <Image
          src={featuredBlog.image}
          alt={featuredBlog.imageAlt}
          fill
          sizes="(max-width: 600px) 92vw, (max-width: 900px) 30vw, 24vw"
          style={{ objectPosition: featuredBlog.imagePosition }}
        />
      </div>
      <h3 id="featured-blog-title">{featuredBlog.title}</h3>
    </article>
  );
}
