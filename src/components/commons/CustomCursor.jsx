import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [cursorVariant, setCursorVariant] = useState("default");
  const [cursorText, setCursorText] = useState("");

  // Cursor sizes
  const size = {
    default: 40,
    hover: 80,
    text: 90,
  };
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, { stiffness: 800, damping: 40 });
  const springY = useSpring(cursorY, { stiffness: 800, damping: 40 });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - size.default / 2);
      cursorY.set(e.clientY - size.default / 2);
    };

    const handleHoverTargets = (e) => {
      const target = e.target.closest(
        ".cursor-hover-target, a, button, input, textarea, select, [role='button']"
      );

      if (target) {
        const customText = target.dataset.cursorText;
        setCursorText(customText || "");
        setCursorVariant(customText ? "text" : "hover");
      } else {
        setCursorText("");
        setCursorVariant("default");
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleHoverTargets);
    document.addEventListener("mouseout", handleHoverTargets);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleHoverTargets);
      document.removeEventListener("mouseout", handleHoverTargets);
    };
  }, [cursorX, cursorY]);

  const variants = {
    default: {
      width: size.default,
      height: size.default,
      backgroundColor: "transparent",
      border: "2px solid oklch(0.72 0.18 150)",
      scale: 0.7,
      mixBlendMode: "normal",
    },
    hover: {
      width: size.hover,
      height: size.hover,
      backgroundColor: "oklch(0.72 0.18 150)",
      border: "none",
      scale: 0.7,
      mixBlendMode: "difference",
    },
    text: {
      width: size.text,
      height: size.text,
      backgroundColor: "oklch(0.72 0.18 150)",
      border: "none",
      scale: 0.7,
      mixBlendMode: "difference",
    },
  };

  return (
    <>
      {/* Outer Cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed z-[9999] rounded-full pointer-events-none flex items-center justify-center"
        style={{
          x: springX,
          y: springY,
          left: 0,
          top: 0,
        }}
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", damping: 25, stiffness: 400 }}
      >
        <AnimatePresence>
          {cursorText && (
            <motion.span
              className="text-xs font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {cursorText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default CustomCursor;
