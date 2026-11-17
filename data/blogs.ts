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

export type BlogPost = {
  id: string;
  title: string;
  category: string;
  author: string;
  publishedAt: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  url: "#";
};

// Development samples only: all authors, dates and articles below are fictional.
// Keep the homepage's existing blogArticles and featuredBlog exports unchanged.
export const blogPosts: readonly BlogPost[] = [
  {
    id: "sample-learning-path",
    title:
      "Finding your starting point: A practical guide to building new skills",
    category: "Skill Development",
    author: "Ananya Sharma",
    publishedAt: "2026-11-16T00:00:00+05:30",
    image: "/images/press/learning.png",
    imageAlt:
      "Illustrative adult learners discussing a task with an instructor",
    excerpt:
      "A sample introduction to setting learning goals and taking manageable steps towards developing new capabilities.",
    url: "#",
  },
  {
    id: "sample-digital-confidence",
    title: "Digital confidence begins with the everyday tools we use",
    category: "Digital Skills",
    author: "Kabir Mehta",
    publishedAt: "2026-11-12T00:00:00+05:30",
    image: "/images/careers/collaboration.png",
    imageAlt:
      "Illustrative group collaborating with laptops and notebooks in a workshop",
    excerpt:
      "A development sample exploring a thoughtful approach to practising useful digital habits.",
    url: "#",
  },
  {
    id: "sample-practice",
    title: "From understanding to doing: Why practice matters in learning",
    category: "Learning",
    author: "Meera Iyer",
    publishedAt: "2026-11-09T00:00:00+05:30",
    image: "/images/careers/practice.png",
    imageAlt:
      "Illustrative learners exploring a hands-on demonstration at a workbench",
    excerpt:
      "A sample perspective on connecting new knowledge with practical exercises and reflection.",
    url: "#",
  },
  {
    id: "sample-education",
    title: "Making room for questions in the learning environment",
    category: "Education",
    author: "Rohan Verma",
    publishedAt: "2026-11-05T00:00:00+05:30",
    image: "/images/press/learning.png",
    imageAlt:
      "Illustrative instructor guiding adult learners through a shared task",
    excerpt:
      "A sample article considering how curiosity and conversation can support understanding.",
    url: "#",
  },
  {
    id: "sample-career",
    title:
      "Preparing for your next step with a clearer picture of your strengths",
    category: "Career Development",
    author: "Isha Sen",
    publishedAt: "2026-10-30T00:00:00+05:30",
    image: "/images/careers/collaboration.png",
    imageAlt:
      "Illustrative adults exchanging ideas in a professional learning session",
    excerpt:
      "A development sample about reflecting on abilities and identifying areas for growth.",
    url: "#",
  },
  {
    id: "sample-learning-habits",
    title: "Small learning habits that make space for steady progress",
    category: "Learning",
    author: "Arjun Rao",
    publishedAt: "2026-10-26T00:00:00+05:30",
    image: "/images/careers/practice.png",
    imageAlt:
      "Illustrative practical learning activity with equipment and notebooks",
    excerpt:
      "A sample look at structuring time for practice, feedback and thoughtful reflection.",
    url: "#",
  },
  {
    id: "sample-collaboration",
    title: "Learning together: The value of sharing different perspectives",
    category: "Education",
    author: "Naina Kapoor",
    publishedAt: "2026-10-21T00:00:00+05:30",
    image: "/images/careers/collaboration.png",
    imageAlt:
      "Illustrative workshop participants listening to one another around a table",
    excerpt:
      "A sample discussion of collaborative learning and respectful exchanges of ideas.",
    url: "#",
  },
  {
    id: "sample-digital-habits",
    title: "Building thoughtful digital habits for study and work",
    category: "Digital Skills",
    author: "Dev Malhotra",
    publishedAt: "2026-10-16T00:00:00+05:30",
    image: "/images/press/learning.png",
    imageAlt: "Illustrative adult learners working together on a laptop",
    excerpt:
      "A development sample on organising information and approaching digital tasks with care.",
    url: "#",
  },
  {
    id: "sample-feedback",
    title: "Turning feedback into a practical plan for skill development",
    category: "Skill Development",
    author: "Kavya Nair",
    publishedAt: "2026-10-10T00:00:00+05:30",
    image: "/images/careers/practice.png",
    imageAlt:
      "Illustrative instructor and trainees reviewing a practical demonstration",
    excerpt:
      "A sample exploration of how specific feedback can inform the next learning step.",
    url: "#",
  },
];
