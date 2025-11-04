import "../styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps, router }) {
  return (
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
  );
}

export default MyApp;
