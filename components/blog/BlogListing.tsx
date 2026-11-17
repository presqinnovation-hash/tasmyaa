"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { blogPosts } from "@/data/blogs";
import BlogCard from "./BlogCard";

const categories = [...new Set(blogPosts.map((post) => post.category))].sort();

export default function BlogListing() {
  const [category, setCategory] = useState("");
  const visiblePosts = category
    ? blogPosts.filter((post) => post.category === category)
    : blogPosts;
  return (
    <div className="tasmyaa-blog-page-container">
      <div className="tasmyaa-blog-page-heading">
        <h1>Connecting Dots – The Tasmyaa Blog</h1>
        <div className="tasmyaa-blog-page-filter">
          <label htmlFor="blog-category" className="tasmyaa-blog-page-sr-only">
            Filter by category
          </label>
          <select
            id="blog-category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronDown size={14} aria-hidden="true" />
        </div>
      </div>
      <p className="tasmyaa-blog-page-sample-note" id="blog-sample-note">
        Development preview: all articles, author names and publication dates
        below are sample content, not published Tasmyaa articles.
      </p>
      <p role="status" className="tasmyaa-blog-page-sr-only">
        {visiblePosts.length} sample{" "}
        {visiblePosts.length === 1 ? "article" : "articles"}
        {category ? ` in ${category}` : " in all categories"}
      </p>
      {visiblePosts.length ? (
        <div
          className="tasmyaa-blog-page-grid"
          aria-describedby="blog-sample-note"
        >
          {visiblePosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="tasmyaa-blog-page-empty">
          No articles match this category. Please select another category or All
          Categories.
        </p>
      )}
    </div>
  );
}
