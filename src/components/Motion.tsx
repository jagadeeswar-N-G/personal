"use client"
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import Discover from "./Discover";
import poster from '../images/poster-selling.png'
const projects = [
    {
        title: "Poster Selling",
        description: "This  website is for selling Posters and this is responsive with dark mode and flexible navigation",
        tech: ["Next js", "React", "Zod", "Typescript", "Shadcn", "Stripe", "Resend"],
        link: 'https://github.com/jagadeeswar-N-G/poster-selling'
    },
    {
        title: "Algolia Next app",
        description: "Leveraging Algolia's robust search engine built a website for movies list for recomendation",
        tech: ["Next js", "React", "Algolia", "Typescript", "Tailwind CSS"],
        link: 'https://github.com/jagadeeswar-N-G/algolia-nextapp'
    },
    {
        title: "Contentful Personal Blog",
        description: "Headless architecture is transforming the game, offering flexibility and scalability. Contentful simplifies content management, while Next.js and Apollo GraphQL ensure a seamless, high-performance web experience",
        tech: ["Next js", "React", "Contentful CMS", "Grapgql", "Typescript", "Tailwind CSS"],
        link: 'https://github.com/jagadeeswar-N-G/contentfulnext'
    },
    {
        title: "User Authentication",
        description: " user authentication to our project, powered by Next.js, MongoDB, Zod, and Express. This robust authentication system ensures secure user registration, login, and data validation.",
        tech: ["Next js", "React", "Zod", "Typescript", "Mongo DB", "Tailwind CSS", "Axios"],
        link: 'https://github.com/jagadeeswar-N-G/nextjs-user-authentication'
    },
    {
        title: "Blog",
        description: "I tried to create a personal blob, with Payload CMS",
        tech: ["Next js", "React", "PayLoad CMS", "Typescript"],
        link: 'https://github.com/jagadeeswar-N-G/blog'
    },

]



export default function Motion() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {projects.map((project) => (
        <Discover project={project}/> 
      ))}
      <motion.div className="fixed left-0 right-0 h-[5x] bottom-[100%]" style={{ scaleX }} />
    </>
  );
}