import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

export const GlobalLoader = ({ onLoaded }) => {
  const { progress } = useProgress();
  const [phase, setPhase] = useState("in"); // 'in' | 'hold' | 'out' | 'done'
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Once Three.js reports 100% loaded, start exit sequence
    if (progress === 100) {
      // Small buffer so textures actually flush to GPU
      const holdTimer = setTimeout(() => {
        setPhase("out");
      }, 500);

      const doneTimer = setTimeout(() => {
        setVisible(false);
        onLoaded?.();
      }, 1300); // 500ms hold + 800ms fade-out

      return () => {
        clearTimeout(holdTimer);
        clearTimeout(doneTimer);
      };
    }
  }, [progress]);

  // The greeting text
  const greetingText = "Hi, I'm";

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(ellipse at 40% 50%, #0a0a14 0%, #000000 100%)",
        opacity: phase === "out" ? 0 : 1,
        transition: phase === "out" ? "opacity 0.8s cubic-bezier(0.16,1,0.3,1)" : "none",
        pointerEvents: phase === "out" ? "none" : "all",
      }}
    >
      {/* Subtle grain overlay matching site aesthetic */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          backgroundSize: "180px 180px",
          opacity: 0.04,
          pointerEvents: "none",
        }}
      />

      {/* "Hi, I'm" fluid text */}
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(48px, 12vw, 110px)",
          fontWeight: 300,
          color: "white",
          letterSpacing: "-0.02em",
          lineHeight: 1,
          animation: "textFlowIn 1.2s cubic-bezier(0.16,1,0.3,1) both",
        }}
      >
        {greetingText}
      </div>

      {/* Thin progress bar at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "2px",
          width: `${progress}%`,
          background:
            "linear-gradient(90deg, rgba(120,120,255,0.6), rgba(200,160,255,0.9))",
          transition: "width 0.3s ease",
          boxShadow: "0 0 12px rgba(160,120,255,0.6)",
        }}
      />

      {/* Keyframe styles injected inline */}
      <style>{`
        @keyframes textFlowIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};
