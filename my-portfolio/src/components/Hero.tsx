export default function Hero() {
  return (
    <section className="text-center py-24 px-6">
      
      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-bold leading-tight">
      Hi, I'm{" "}
     <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
      Ishika Jain
     </span>
     </h1>

      {/* Subtext */}
     <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
     I am a Web Developer | Tech Enthusiast 🚀 <br />
     I build modern web applications and showcase my journey through projects,
     certificates, and achievements.
     </p>

      {/* Buttons */}
      <div className="mt-8 flex justify-center gap-4">
        <a href="#projects">
          <button className="bg-white text-black px-6 py-2 rounded-lg hover:scale-105 transition">
            View Projects
          </button>
        </a>

        <a href="#certificates">
          <button className="border px-6 py-2 rounded-lg hover:bg-white/10 backdrop-blur-lg border border-white/10 transition">
            Certificates
          </button>
        </a>
      </div>

    </section>
  );
}