import "../styles/globals.css";
import "../styles/content.css";
import "../styles/blog-post.css";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

function MyApp({ Component, pageProps, router }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <>
      {/* Google Analytics */}
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {/* Your existing app */}
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <ThemeProvider attribute="class" defaultTheme="light">
            <Component {...pageProps} />
          </ThemeProvider>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
