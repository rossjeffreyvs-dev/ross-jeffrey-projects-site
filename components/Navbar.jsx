import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const linkClass = (path) =>
    router.pathname === path
      ? "text-[1.05rem] text-black dark:text-white font-semibold border-b-2 border-black dark:border-white"
      : "text-[1.05rem] text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium";

  return (
    <nav className="bg-white dark:bg-black fixed w-full z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between h-16 items-center relative">
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/logos/jr-projects-logo.png"
            alt="JR Projects"
            className="h-16 w-60"
          />
        </Link>

        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>

          <Link href="/projects" className={linkClass("/projects")}>
            Projects
          </Link>

          <Link href="/blog" className={linkClass("/blog")}>
            Blog
          </Link>

          <Link href="/profile" className={linkClass("/profile")}>
            About
          </Link>

          <Link href="/contact" className={linkClass("/contact")}>
            Contact
          </Link>
        </div>

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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 shadow-xl"
          >
            <div className="px-4 py-4 space-y-4">
              <Link
                href="/"
                className="block text-base font-medium text-gray-800 dark:text-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                <Link
                  href="/projects"
                  className="block text-base font-medium text-gray-800 dark:text-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </Link>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                <Link
                  href="/blog"
                  className="block text-base font-medium text-gray-800 dark:text-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
                <Link
                  href="/profile"
                  className="block text-base font-medium text-gray-800 dark:text-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </div>

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
