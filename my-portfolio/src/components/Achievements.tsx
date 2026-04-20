const achievements = [
  "🏆 Participated in Hackathon 2025",
  "🎖️ Completed Web Development Bootcamp",
  "💡 Built 5+ real-world projects",
  "🚀 Active contributor in tech events"
];

export default function Achievements() {
  return (
    <section className="px-10 py-20">

      <h1 className="text-3xl font-bold mb-10 text-center">
        Achievements 🏆
      </h1>

      <div className="max-w-2xl mx-auto space-y-4">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 p-4 rounded-lg"
          >
            {item}
          </div>
        ))}
      </div>

    </section>
  );
}