// components/Projects.tsx
type Project = {
  title: string;
  description: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "Personal Portfolio",
    description: "Modern portfolio using Next.js and Tailwind CSS.",
    link: "https://yourportfolio.com",
  },
  {
    title: "E-commerce App",
    description: "Full-stack e-commerce app using Stripe and React.",
    link: "#",
  },
  {
    title: "Blog CMS",
    description: "Content management system built with Strapi and React.",
    link: "https://yourblogcms.com",
  },
  {
    title: "Task Manager",
    description: "Productivity tool built with React and Firebase.",
    link: "https://yourtaskmanager.com",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather updates using OpenWeather API.",
    link: "https://yourweatherapp.com",
  },
  {
    title: "Job Board",
    description:
      "Next.js app for job listings and applications using Prisma and PostgreSQL.",
    link: "https://yourjobboard.com",
  },
  {
    title: "Recipe Book",
    description:
      "A searchable recipe app with markdown support and CMS integration.",
    link: "https://yourrecipebook.com",
  },
  {
    title: "Real Estate Platform",
    description:
      "Property listings app with map integration and filtering features.",
    link: "https://mcoding-benfort.vercel.app/",
  },
  {
    title: "Chat App",
    description:
      "Real-time chat application using Next.js, Socket.io, and MongoDB.",
    link: "https://yourchatapp.com",
  },
  {
    title: "SaaS Dashboard",
    description:
      "Admin dashboard for SaaS products with user roles and analytics.",
    link: "https://yoursaasdashboard.com",
  },
  {
    title: "Dev Blog",
    description: "Developer blog with MDX support, tagging, and comments.",
    link: "https://yourdevblog.com",
  },
  {
    title: "Link Shortener",
    description: "URL shortener like Bitly using Redis for fast redirection.",
    link: "https://yourlinkshortener.com",
  },
  {
    title: "Online Course Platform",
    description: "Learning platform with video courses and quizzes.",
    link: "https://yourelearningplatform.com",
  },
  {
    title: "Portfolio CMS",
    description:
      "Next.js portfolio powered by headless CMS like Sanity or Contentful.",
    link: "https://yourcmsportfolio.com",
  },
  {
    title: "Image Gallery",
    description: "Responsive image gallery with Cloudinary integration.",
    link: "https://yourgalleryapp.com",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto px-4 max-w-5xl">
        <h2 className="mb-12 font-bold text-royal text-3xl text-center">
          Projects
        </h2>
        <div className="gap-6 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          {projects.map((project, index) => (
            <div key={index} className="bg-card shadow p-6 rounded-md">
              <h3 className="font-semibold text-xl">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                className="inline-block mt-4"
              >
                Visit →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
