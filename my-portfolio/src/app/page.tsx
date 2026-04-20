import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Certificates from "@/components/Certificates";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Scorecard from "@/components/Scorecard";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Profile />
      <Projects />
      <Certificates />
      <Achievements />
      <Scorecard />
    </div>
  );
}