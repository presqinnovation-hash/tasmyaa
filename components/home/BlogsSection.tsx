import { blogs } from "@/data/homepage";
import { SectionHeading } from "@/components/common/Ui";
export default function BlogsSection() {
  return (
    <section className="blogs-section" id="blogs">
      <SectionHeading>Blogs</SectionHeading>
      <div className="blog-grid">
        {blogs.map((blog) => (
          <article key={blog.title}>
            <p className="blog-category">{blog.category}</p>
            <h3>{blog.title}</h3>
            <p className="blog-authors">{blog.authors}</p>
          </article>
        ))}
      </div>
      <a href="#publications" className="view-all">
        Explore more research
      </a>
    </section>
  );
}
