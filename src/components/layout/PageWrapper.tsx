import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { pageVariants } from "@/lib/motion";

export default function PageWrapper() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
}
