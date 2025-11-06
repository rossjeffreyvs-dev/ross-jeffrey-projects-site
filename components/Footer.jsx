import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const dark = localStorage.getItem("theme") === "dark";
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12 mt-20 text-sm text-gray-600 dark:text-gray-400">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold mb-2">Work</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">About</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link href="/recommendations">Recommendations</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Social</h4>
          <ul className="space-y-1">
            <li>
              <Link
                href="https://github.com/rossjeffreyvs-dev?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/jeffrey-ross1"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-4">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded hover:opacity-80 transition"
          >
            Toggle {isDark ? "Light" : "Dark"} Mode
          </button>
          <button
            onClick={scrollToTop}
            className="text-2xl text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
            aria-label="Scroll to top"
          >
            ↑
          </button>
        </div>
      </div>
      <div className="text-center mt-10 text-xs text-gray-500 dark:text-gray-500">
        © {new Date().getFullYear()} JR Projects. All rights reserved.
      </div>
    </footer>
  );
}
