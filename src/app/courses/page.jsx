import Image from 'next/image'
import React from 'react'
import ShareIcon from '../components/ShareIcon'
import Link from 'next/link'

export const courses = [
  {
    "id": 1,
    "title": "HTML Forms and Input Elements",
    "category": "html",
    "level": "beginner",
    "description": [
      "Learn to create forms and gather user input with HTML.",
      "Explore various input elements such as text fields and checkboxes.",
      "Understand form validation and submission processes.",
      "Master the art of creating interactive web forms.",
      "Apply your knowledge to practical projects."
    ]
  },
  {
    "id": 2,
    "title": "Semantic HTML5 Elements",
    "category": "html",
    "level": "intermediate",
    "description": [
      "Dive into the world of semantic HTML5 elements.",
      "Discover the meaning and proper use of elements like <header>, <nav>, and <section>.",
      "Improve accessibility and SEO with semantic markup.",
      "Enhance your web pages with structured content.",
      "Apply these concepts to real-world websites."
    ]
  },
  {
    "id": 3,
    "title": "HTML Tables and Lists",
    "category": "html",
    "level": "advanced",
    "description": [
      "Master the art of creating data tables in HTML.",
      "Design and style tables for better data presentation.",
      "Learn advanced table accessibility techniques.",
      "Explore ordered and unordered lists for content structuring.",
      "Apply your expertise to complex data-driven web applications."
    ]
  },
  {
    "id": 4,
    "title": "Getting Started with Git and Version Control",
    "category": "git",
    "level": "beginner",
    "description": [
      "Begin your journey into version control with Git.",
      "Understand the concepts of repositories and commits.",
      "Learn to track changes and collaborate with others using Git.",
      "Master basic Git commands like add, commit, and push.",
      "Apply version control to your coding projects."
    ]
  },
  {
    "id": 5,
    "title": "Branching and Merging in Git",
    "category": "git",
    "level": "intermediate",
    "description": [
      "Explore the power of branching and merging in Git.",
      "Learn to create and manage branches for feature development.",
      "Master the art of merging branches back into the main codebase.",
      "Resolve conflicts and maintain a clean version control history.",
      "Apply branching strategies to collaborative projects."
    ]
  },
  {
    "id": 6,
    "title": "Collaborative Workflows with Git and GitHub",
    "category": "git",
    "level": "advanced",
    "description": [
      "Delve into advanced collaborative workflows using Git and GitHub.",
      "Learn to fork repositories, create pull requests, and contribute to open-source projects.",
      "Collaborate with others and manage team-based development using Git.",
      "Explore continuous integration and deployment with GitHub Actions.",
      "Apply these advanced techniques to real-world software development."
    ]
  },
  {
    "id": 7,
    "title": "CSS Box Model and Layout",
    "category": "css",
    "level": "beginner",
    "description": [
      "Master the fundamentals of the CSS box model.",
      "Understand how margins, borders, padding, and content interact.",
      "Learn basic layout techniques for web pages.",
      "Create visually appealing designs with CSS.",
      "Apply your knowledge to simple web layouts."
    ]
  },
  {
    "id": 8,
    "title": "CSS Selectors and Specificity",
    "category": "css",
    "level": "intermediate",
    "description": [
      "Dive deep into CSS selectors and specificity.",
      "Learn to target specific elements and apply styles precisely.",
      "Understand the importance of cascading and inheritance.",
      "Resolve conflicts and order styles effectively.",
      "Apply advanced selectors to complex web designs."
    ]
  },
  {
    "id": 9,
    "title": "Responsive Web Design with CSS",
    "category": "css",
    "level": "advanced",
    "description": [
      "Master responsive web design techniques with CSS.",
      "Create layouts that adapt to various screen sizes and devices.",
      "Learn about media queries and flexible grids.",
      "Optimize images and content for mobile and desktop users.",
      "Apply your skills to build fully responsive websites."
    ]
  },
  {
    "id": 10,
    "title": "JavaScript Variables and Data Types",
    "category": "javascript",
    "level": "beginner",
    "description": [
      "Get started with JavaScript variables and data types.",
      "Understand how to store and manipulate data in your scripts.",
      "Learn about variables, strings, numbers, and more.",
      "Practice working with data in simple JavaScript programs.",
      "Apply your knowledge to basic scripting tasks."
    ]
  },
  {
    "id": 11,
    "title": "Functions and Scope in JavaScript",
    "category": "javascript",
    "level": "intermediate",
    "description": [
      "Dive into the world of JavaScript functions and scope.",
      "Learn how to create and use functions in your code.",
      "Understand variable scope and function closures.",
      "Master advanced function concepts like callbacks and IIFE.",
      "Apply your knowledge to create modular and maintainable code."
    ]
  },
  {
    "id": 12,
    "title": "JavaScript DOM Manipulation",
    "category": "javascript",
    "level": "advanced",
    "description": [
      "Become a pro at manipulating the Document Object Model (DOM) with JavaScript.",
      "Learn to access and modify web page elements dynamically.",
      "Understand event handling and DOM traversal techniques.",
      "Master asynchronous requests and data manipulation in the DOM.",
      "Apply your skills to create interactive and responsive web applications."
    ]
  },
  {
    "id": 13,
    "title": "Introduction to Tailwind CSS and Utility Classes",
    "category": "tailwindcss",
    "level": "beginner",
    "description": [
      "Embark on your journey into Tailwind CSS and utility classes.",
      "Discover the power of utility-first CSS and its benefits.",
      "Learn the basics of applying styles with Tailwind classes.",
      "Build responsive and visually appealing interfaces rapidly.",
      "Apply your knowledge to design and style simple web components."
    ]
  },
  {
    "id": 14,
    "title": "Customizing and Extending Tailwind CSS",
    "category": "tailwindcss",
    "level": "intermediate",
    "description": [
      "Explore the world of customizing and extending Tailwind CSS.",
      "Learn to configure Tailwind to match your project's needs.",
      "Extend utility classes and create custom styles.",
      "Integrate plugins and add-ons to enhance Tailwind's capabilities.",
      "Apply your expertise to create unique and branded designs."
    ]
  },
  {
    "id": "15",
    "title": "Building Responsive Interfaces with Tailwind",
    "category": "tailwindcss",
    "level": "advanced",
    "description": [
      "Master responsive web design techniques with CSS.",
      "Create layouts that adapt to various screen sizes and devices.",
      "Learn about media queries and flexible grids.",
      "Optimize images and content for mobile and desktop users.",
      "Apply your skills to build fully responsive websites."
    ]
  },
    {
      "id": 16,
      "title": "Advanced CSS Animation and Transitions",
      "category": "css",
      "level": "advanced",
      "description": [
        "Take your CSS animation skills to the next level.",
        "Master keyframe animations and CSS transitions.",
        "Create stunning visual effects and interactive animations.",
        "Learn to implement complex motion design in web projects.",
        "Apply your expertise to craft impressive user experiences."
      ]
    },
    {
      "id": 17,
      "title": "JavaScript Testing and Debugging Strategies",
      "category": "javascript",
      "level": "advanced",
      "description": [
        "Become proficient in JavaScript testing and debugging.",
        "Learn testing libraries like Jest and testing methodologies.",
        "Master debugging techniques for locating and fixing issues.",
        "Understand performance optimization and error handling.",
        "Apply your skills to create reliable and error-free JavaScript applications."
      ]
    },
    {
      "id": 18,
      "title": "Optimizing Performance with Tailwind CSS",
      "category": "tailwindcss",
      "level": "advanced",
      "description": [
        "Achieve top-notch performance with Tailwind CSS.",
        "Optimize your CSS for faster loading and rendering.",
        "Learn to reduce bundle sizes and improve page speed.",
        "Apply performance best practices for responsive designs.",
        "Apply your knowledge to create lightning-fast web applications."
      ]
    },
    {
      "id": 19,
      "title": "React Router and Navigation",
      "category": "react",
      "level": "intermediate",
      "description": [
        "Explore client-side routing with React Router.",
        "Learn to create dynamic, multi-page web applications.",
        "Master route configuration, nested routes, and route parameters.",
        "Understand navigation guards and routing strategies.",
        "Apply your knowledge to build complex React applications with smooth navigation."
      ]
    },
    {
      "id": 20,
      "title": "Testing React Applications with Jest and React Testing Library",
      "category": "react",
      "level": "advanced",
      "description": [
        "Become an expert in testing React applications with Jest and React Testing Library.",
        "Learn to write unit tests, integration tests, and end-to-end tests.",
        "Understand best practices for testing React components and state management.",
        "Master test-driven development (TDD) and testing strategies.",
        "Apply your expertise to ensure the quality and reliability of your React projects."
      ]
    }
  ]
  
  const courseData = courses.map(course => (
    <article key={course.id} className='flex flex-col justify-center items-center p-2 border-4 border-yellow-300 rounded-xl'>
      <h2>{course.title}</h2>
      <Link href={`/courses/${course.title.split(' ').join('-')}`}>
      <Image src={`https://robohash.org/${course.title}`} alt={course.title} width={400} height={400}/>
      </Link>
      <p>Level: {course.level}</p>
        <ShareIcon />
    </article>
  ))

export default function Courses() {
  return (
    <section className='grid md:grid-cols-3 gap-3 grid-cols-1'>
      {courseData}
    </section>
  )
}
