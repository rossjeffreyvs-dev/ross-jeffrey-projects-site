import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function BlogPost() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 px-4 max-w-3xl mx-auto">
        <article>
          <h1 className="text-4xl font-bold">You Can Just Ship Agents</h1>
          <p className="mt-4 text-gray-500">Published Oct 30, 2025 · by Vercel Team</p>
          <section className="mt-8 space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
              Building and deploying full-stack, LLM-powered apps is easier than ever. Vercel now supports intelligent agents
              that run on the edge, with minimal latency and seamless integration into your developer workflow.
            </p>
            <p>
              The AI deployment stack is here: ship your frontend, backend, and intelligent agents using the same workflow. Just push to Git, and Vercel takes care of the rest.
            </p>
            <p>
              The future of software is agents — and the infrastructure to support them is available now.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
