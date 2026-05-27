// import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const GlobalLoader = ({ onLoaded }) => {
  // const { progress } = useProgress();
  const progress = 100; // Hardcoded to 100 since we removed Three.js
  const [phase, setPhase] = useState("in"); // 'in' | 'hold' | 'out' | 'done'
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // If progress is 100, we can immediately begin the 'out' phase
    // since there are no heavy 3D models to wait for anymore!
    if (progress === 100) {
      const holdTimer = setTimeout(() => {
        setPhase("out");
      }, 0); // Reduced from 500ms

      const doneTimer = setTimeout(() => {
        setVisible(false);
        onLoaded?.();
      }, 1000); // Reduced from 1500ms (1000ms is enough for the curtain animation to finish)

      return () => {
        clearTimeout(holdTimer);
        clearTimeout(doneTimer);
      };
    }
  }, [progress, onLoaded]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: phase === "out" ? "none" : "all",
      }}
    >
      {/* Yellow Curtains */}
      <div style={{ display: 'flex', width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: phase === "out" ? "-100%" : 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0 }}
          style={{ flex: 1, backgroundColor: "#f8c210" }}
        />
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: phase === "out" ? "-100%" : 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          style={{ flex: 1, backgroundColor: "#f8c210" }}
        />
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: phase === "out" ? "-100%" : 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          style={{ flex: 1, backgroundColor: "#f8c210" }}
        />
      </div>

      {/* Loading Text / Logo */}
      <AnimatePresence>
        {phase !== "out" && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(48px, 15vw, 150px)",
                fontWeight: 900,
                color: "#222",
                letterSpacing: "-0.04em",
                lineHeight: 0.8,
              }}
            >
              ANSHI
            </div>
            {/* Thin progress bar */}
            <div
              style={{
                position: "absolute",
                bottom: "20%",
                left: "50%",
                transform: "translateX(-50%)",
                height: "4px",
                width: "200px",
                backgroundColor: "rgba(0,0,0,0.1)",
                borderRadius: "2px",
                overflow: "hidden"
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${progress}%`,
                  backgroundColor: "#222",
                  transition: "width 0.3s ease",
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
