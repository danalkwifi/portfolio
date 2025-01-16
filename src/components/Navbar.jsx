import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"; 
import logo from "../assets/danalkwifiLogo.webp";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-3" width={60} height={33} alt="Dana Al-Kwifi Logo" />
        </a>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/dana-al-kwifi-602853203/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-600 hover:text-gray-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/danalkwifi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-600 hover:text-gray-500"
        >
          <FaGithub />
        </a>
        
      </div>
    </nav>
  );
};
