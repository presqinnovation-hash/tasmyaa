import { blogArticles } from "@/data/blogs";
import BlogArticleItem from "./BlogArticleItem";
import FeaturedBlogCard from "./FeaturedBlogCard";
import "./BlogsSection.css";

export default function BlogsSection() {
  return (
    <section className="tasmyaa-blogs-section" aria-labelledby="blogs-heading">
      <div className="tasmyaa-blogs-panel">
        <h2 id="blogs-heading">Blogs</h2>
        <div className="tasmyaa-blogs-articles" id="blog-articles">
          {blogArticles.map((article) => (
            <BlogArticleItem key={article.id} article={article} />
          ))}
        </div>
        <a className="tasmyaa-blogs-view-all" href="#blog-articles">
          View all<span className="tasmyaa-blogs-sr-only"> blog articles</span>
        </a>
      </div>
      <FeaturedBlogCard />
    </section>
  );
}
