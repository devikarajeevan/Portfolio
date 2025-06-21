import {
  GithubIcon,
  LinkedinIcon,
  Mail,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-10">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:justify-between gap-12">
        {/* Left - Branding */}
        <div className="md:w-1/3">
          <h3 className="text-2xl font-bold mb-4">Devika Rajeevan</h3>
          <p className="text-gray-400">
            Frontend Developer crafting clean, accessible, and responsive web interfaces.
          </p>
        </div>

        {/* Center - Navigation */}
        <div className="md:w-1/3">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
            <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
            <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
            <li><a href="/experience" className="text-gray-400 hover:text-white transition-colors">Experience</a></li>
          </ul>
        </div>

        {/* Right - Social */}
        <div className="md:w-1/3">
          <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
          <p className="text-gray-400 mb-4">Feel free to reach out on any platform!</p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/devikarajeevan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <GithubIcon size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/devika-rajeevan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <LinkedinIcon size={24} />
            </a>
            <a
              href="mailto:devikarajeevan2004@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        &copy; 2024 Devika Rajeevan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
