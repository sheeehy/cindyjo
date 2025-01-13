// FadeInAnimation.tsx
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface FadeInAnimationProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  ease?: [number, number, number, number];
  yInitial?: number;
  yAnimate?: number;
}

const FadeInAnimation: React.FC<FadeInAnimationProps> = ({ children, duration = 1, delay = 0.1, ease = [0.33, 0, 0, 1], yInitial = 15, yAnimate = 0 }) => {
  return (
    <motion.div initial={{ opacity: 0, y: yInitial }} animate={{ opacity: 1, y: yAnimate }} transition={{ duration, delay, ease }}>
      {children}
    </motion.div>
  );
};

export default FadeInAnimation;
