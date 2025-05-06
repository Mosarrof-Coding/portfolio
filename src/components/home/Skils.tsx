// components/Skills.tsx
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "shadCN",
  "Carousel",
  "Bootstrap",
  "SASS",
  "TypeScript",
  "Git",
  "mongoDB",
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto px-4 max-w-4xl text-center">
        <h2 className="mb-10 font-bold text-royal text-3xl">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-card/80 hover:shadow-lg px-4 py-2 rounded-md transition-all cursor-pointer"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
