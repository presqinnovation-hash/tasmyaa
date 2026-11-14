export type BlogArticle = {
  id: string;
  category: string;
  title: string;
  authors: readonly string[];
};

// Sample editorial content supplied for the homepage UI preview.
export const blogArticles: readonly BlogArticle[] = [
  {
    id: "clean-air",
    category: "Clean Air",
    title: "Stubble burning is moving: Beyond Punjab, and into the evening",
    authors: ["L. S. Kurinji", "Srishti Jain", "Khushi Sharma"],
  },
  {
    id: "rooftop-solar",
    category: "Clean Energy",
    title:
      "Can rooftop solar schemes scale for Indians who don't own rooftops?",
    authors: ["Harpreet Singh"],
  },
  {
    id: "cooking-fuels",
    category: "Clean Air",
    title: "Connected, not yet fully converted—India's LPG story in numbers",
    authors: [
      "Rahul Das",
      "Abhishek Kar",
      "Dharshan Siddarth Mohan",
      "Karthik Shetty",
      "Hemant Prakash Singh",
      "Sabarish Elango",
      "Hemant Mallya",
    ],
  },
];

export const featuredBlog = {
  title: "A shared transition needs every voice at the table",
  image: "/images/hero-climate-forum.png",
  imageAlt:
    "Original generated editorial image of fictional delegates discussing climate policy",
  imagePosition: "49% center",
};
