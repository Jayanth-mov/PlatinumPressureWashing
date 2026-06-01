"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds for use within a row of items. */
  delay?: number;
  /** Render as something other than a div (e.g. an existing element with classes). */
  as?: "div" | "section" | "figure";
}

const elements = {
  div: motion.div,
  section: motion.section,
  figure: motion.figure,
};

export default function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const Component = elements[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  );
}
