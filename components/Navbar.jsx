import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile hamburger
  const [activeDropdown, setActiveDropdown] = useState(null); // desktop hover: "projects" | "about"
  const [mobileOpen, setMobileOpen] = useState({
    projects: false,
    about: false,
  }); // mobile accordion
  const router = useRouter();

  const linkClass = (path) =>
    router.pathname === path
      ? "text-[1.05rem] text-black dark:text-white font-semibold border-b-2 border-black dark:border-white"
      : "text-[1.05rem] text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium";

  const toggleMobileSection = (section) => {
    setMobileOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <nav className="bg-white dark:bg-black fixed w-full z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between h-16 items-center relative">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/logos/jr-projects-logo.png"
            alt="JR Projects"
            className="h-16 w-60"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>

          {/* Projects dropdown (desktop only) */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("projects")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className={
                linkClass("/projects") + " flex items-center space-x-1"
              }
            >
              <span>Projects</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <AnimatePresence>
              {activeDropdown === "projects" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 top-full mt-2 bg-white dark:bg-gray-900 shadow-xl border rounded-md w-64 py-4 px-4 z-50"
                >
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/projects"
                        className="flex items-start space-x-2 hover:text-black dark:hover:text-white transition"
                      >
                        <span className="mr-2">🗂️</span>
                        <div>
                          <p className="font-semibold">Main</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            List of portfolio projects
                          </p>
                        </div>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="https://clinical-trial-patient-agent.jeffrey-ross.me"
                        className="flex items-start space-x-2 hover:text-black dark:hover:text-white transition"
                      >
                        <span className="mr-2">🧬</span>
                        <div>
                          <p className="font-semibold">
                            Agentic Clinical Trials
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            AI-driven patient eligibility for clinical trials
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://semantic-patient-search.jeffrey-ross.me/"
                        className="flex items-start space-x-2 hover:text-black dark:hover:text-white transition"
                      >
                        <span className="mr-2">🔍</span>
                        <div>
                          <p className="font-semibold">Semantic Search</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Semantic patient search for research discovery
                          </p>
                        </div>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="https://resume-analyzer.jeffrey-ross.me"
                        className="flex items-start space-x-2 hover:text-black dark:hover:text-white transition"
                      >
                        <span className="mr-2">📄</span>
                        <div>
                          <p className="font-semibold">AI Résumé Match</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Compare to job description
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://fx-insights.jeffrey-ross.me/"
                        className="flex items-start space-x-2 hover:text-black dark:hover:text-white transition"
                      >
                        <span className="mr-2">📈</span>

                        <div>
                          <p className="font-semibold">AI FX Insights</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Foreign exchange client report
                          </p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/blog" className={linkClass("/blog")}>
            Blog
          </Link>

          {/* About dropdown (desktop only) */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("about")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className={linkClass("/about") + " flex items-center space-x-1"}
            >
              <span>About</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <AnimatePresence>
              {activeDropdown === "about" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 top-full mt-2 bg-white dark:bg-gray-900 shadow-xl border rounded-md w-64 py-4 px-4 z-50"
                >
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/profile"
                        className="flex items-start space-x-2 hover:text-black dark:hover:text-white transition"
                      >
                        <span>👤</span>
                        <div>
                          <p className="font-semibold">Profile</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Brief personal highlights
                          </p>
                        </div>
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        href="/recommendations"
                        className="flex items-start space-x-2 hover:text-black dark:hover:text-white transition"
                      >
                        <span>💬</span>
                        <div>
                          <p className="font-semibold">Recommendations</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Feedback from colleagues
                          </p>
                        </div>
                      </Link>
                    </li> */}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/contact" className={linkClass("/contact")}>
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 shadow-xl"
          >
            <div className="px-4 py-4 space-y-4">
              {/* Home */}
              <Link
                href="/"
                className="block text-base font-medium text-gray-800 dark:text-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              {/* Projects (mobile collapsible) */}
              {/* <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                <button
                  className="w-full flex justify-between items-center text-left text-base font-medium text-gray-800 dark:text-gray-100"
                  onClick={() => toggleMobileSection("projects")}
                >
                  <span className="flex items-center space-x-2">
                    <span>Projects</span>
                  </span>
                  <svg
                    className={`w-5 h-5 transform transition ${
                      mobileOpen.projects ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {mobileOpen.projects && (
                  <div className="mt-3 pl-4 space-y-3">
                    <Link
                      href="/projects"
                      className="flex items-start space-x-2 text-gray-600 dark:text-gray-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <span>📣</span>
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-gray-100">
                          Projects
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Trusted by the best teams
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/blog"
                      className="flex items-start space-x-2 text-gray-600 dark:text-gray-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <span>📝</span>
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-gray-100">
                          Blog
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Latest posts and changes
                        </p>
                      </div>
                    </Link>
                  </div>
                )}
              </div> */}

              {/* Projects direct link */}
              <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                <Link
                  href="/projects"
                  className="block text-base font-medium text-gray-800 dark:text-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </Link>
              </div>

              {/* Blog direct link */}
              <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                <Link
                  href="/blog"
                  className="block text-base font-medium text-gray-800 dark:text-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
              </div>

              {/* About direct link */}
              <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                <Link
                  href="/profile"
                  className="block text-base font-medium text-gray-800 dark:text-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </div>

              {/* About (mobile collapsible) */}
              {/* <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                <button
                  className="w-full flex justify-between items-center text-left text-base font-medium text-gray-800 dark:text-gray-100"
                  onClick={() => toggleMobileSection("about")}
                >
                  <span className="flex items-center space-x-2">
                    <span>About</span>
                  </span>
                  <svg
                    className={`w-5 h-5 transform transition ${
                      mobileOpen.about ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {mobileOpen.about && (
                  <div className="mt-3 pl-4 space-y-3">
                    <Link
                      href="/profile"
                      className="flex items-start space-x-2 text-gray-600 dark:text-gray-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <span>👤</span>
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-gray-100">
                          Profile
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Personal profile highlights
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/recommendations"
                      className="flex items-start space-x-2 text-gray-600 dark:text-gray-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <span>💬</span>
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-gray-100">
                          Recommendations
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Feedback from work colleagues
                        </p>
                      </div>
                    </Link>
                  </div>
                )}
              </div> */}

              {/* Contact */}
              <div className="border-t border-gray-200 dark:border-gray-800 pt-4 pb-2">
                <Link
                  href="/contact"
                  className="block text-base font-medium text-gray-800 dark:text-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
