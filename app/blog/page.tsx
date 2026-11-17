import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogListing from "@/components/blog/BlogListing";
import "./blog.css";

export const metadata: Metadata = {
  title: "Connecting Dots – The Tasmyaa Blog",
  description:
    "A development preview of sample articles about skill development, education, digital skills, learning and career development.",
};

export default function BlogPage() {
  return (
    <>
      <a className="tasmyaa-blog-page-skip" href="#blog-main">
        Skip to blog articles
      </a>
      <Header />
      <main className="tasmyaa-blog-page" id="blog-main">
        <BlogListing />
      </main>
      <Footer />
    </>
  );
}
