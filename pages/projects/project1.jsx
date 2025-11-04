import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

import Image from "next/image";
import Head from "next/head";

export default function Project1() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Head>
        <title>
          How Notion Powers Rapid and Performant Experimentation | JR Projects
        </title>
        <meta
          name="description"
          content="Learn how Notion leverages modern experimentation frameworks to iterate quickly while maintaining performance and stability."
        />
      </Head>

      <main className="bg-white dark:bg-black text-gray-900 dark:text-gray-100 min-h-screen">
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Product Engineering · October 2025
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6">
            How Notion Powers Rapid and Performant Experimentation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Behind Notion’s smooth user experience lies a powerful
            experimentation system that balances speed, reliability, and
            innovation. Here’s how they scale ideas to millions of users—without
            slowing down.
          </p>

          <div className="flex items-center space-x-4 mt-8">
            <Image
              src="/images/author-placeholder.png"
              alt="Author"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold">Jeff Ross</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Founder & Product Engineer
              </p>
            </div>
          </div>
        </section>

        {/* Cover Image */}
        <div className="relative h-[200px] mx-auto max-w-5xl">
          <Image
            src="/images/notion-cover.png"
            alt="Notion experimentation dashboard"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Article Body */}
        <article className="prose prose-gray dark:prose-invert prose-lg max-w-3xl mx-auto px-6 py-20 leading-relaxed">
          <h2>The Challenge: Fast Iteration at Scale</h2>
          <p>
            As Notion’s user base grew exponentially, the team faced a familiar
            tension: how to move quickly while maintaining reliability.
            Traditional A/B testing systems couldn’t keep up with the speed and
            scale they needed.
          </p>

          <h2>The Solution: Layered Experimentation Framework</h2>
          <p>
            Notion implemented a multi-tier experimentation platform that allows
            engineers and product managers to ship, test, and measure changes
            independently—without blocking core development.
          </p>
          <ul>
            <li>Modular experiment configurations stored in YAML</li>
            <li>Real-time metric dashboards via internal APIs</li>
            <li>Gradual rollout controls for safe deployments</li>
          </ul>

          <h2>Performance Without Compromise</h2>
          <p>
            Each experiment is measured not only on engagement but also latency
            impact. Teams use automated regression detection that flags slow
            experiments before they reach production scale.
          </p>

          <blockquote>
            “We treat performance as a feature—experiments must prove they
            enhance, not degrade, the user experience.”
          </blockquote>

          <h2>Key Takeaways</h2>
          <ul>
            <li>
              Build experimentation as a first-class system, not an
              afterthought.
            </li>
            <li>Automate metrics collection and alerting.</li>
            <li>
              Make experimentation accessible to every team—not just data
              scientists.
            </li>
          </ul>

          <p>
            Through thoughtful engineering and culture, Notion shows how teams
            can innovate rapidly while delivering consistently delightful
            experiences.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
