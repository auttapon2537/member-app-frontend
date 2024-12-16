import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "FREE Product 001",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["1,000 point"],
    publishDate: "2025-12-31",
  },
  {
    id: 2,
    title: "FREE Product 002",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["2,000 point"],
    publishDate: "2025-12-31",
  },
  {
    id: 3,
    title: "FREE Product 003",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["1,500 point"],
    publishDate: "2025-12-31",
  },
];
export default blogData;
