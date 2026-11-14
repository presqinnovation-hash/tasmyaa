import type { BlogArticle } from "@/data/blogs";

export default function BlogArticleItem({ article }: { article: BlogArticle }) {
  return (
    <article
      className="tasmyaa-blog-article"
      aria-labelledby={`blog-${article.id}`}
    >
      <p className="tasmyaa-blog-category">{article.category}</p>
      <h3 id={`blog-${article.id}`}>{article.title}</h3>
      <p className="tasmyaa-blog-authors">{article.authors.join(", ")}</p>
    </article>
  );
}
