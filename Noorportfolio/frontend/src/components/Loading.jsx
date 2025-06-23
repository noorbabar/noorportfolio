import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../style/loading.css";

const typingText = "Discipline, passion, and consistency drive every project I build. Crafting solutions that protect, inspire, and make an impact.";

const Loader = ({ onFinish }) => {
  const [displayText, setDisplayText] = useState("");
  const [typedDone, setTypedDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(typingText.slice(0, index + 1));
      index++;
      if (index === typingText.length) {
        clearInterval(interval);
        setTypedDone(true);
      }
    }, 50);

    const timer = setTimeout(() => {
      onFinish();
    }, 9000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        className="loader-wrapper"
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h2 className="loader-loading-text">Loading Noor’s Portfolio</h2>
        <motion.p
          className={`loader-typing-text ${typedDone ? "gradient-text" : "dark-text"}`}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {displayText}
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
