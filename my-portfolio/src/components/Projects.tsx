const projects = [
  {
    title: "Music Player",
    description: "A web music player built using HTML, CSS, and JavaScript.",
    link: "https://github.com/your-link"
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio built using Next.js and Tailwind.",
    link: "https://github.com/your-link"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="px-10 py-20">

      <h1 className="text-3xl font-bold mb-10 text-center">
        My Projects 💻
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition"
          >
            <h2 className="text-xl font-semibold">
              {project.title}
            </h2>

            <p className="text-gray-400 mt-2">
              {project.description}
            </p>

            <a href={project.link} target="_blank">
              <button className="mt-4 bg-white text-black px-4 py-2 rounded">
                View Project
              </button>
            </a>
          </div>
        ))}
      </div>

    </section>
  );
}