export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black text-white border-b border-gray-800">
      
      {/* Logo */}
      <h1 className="text-xl font-bold">MyPortfolio</h1>

      {/* Links */}
      <div className="space-x-6 hidden md:block">
        <a href="#projects" className="hover:text-gray-400">Projects</a>
        <a href="#certificates" className="hover:text-gray-400">Certificates</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
      </div>

    </nav>
  );
}