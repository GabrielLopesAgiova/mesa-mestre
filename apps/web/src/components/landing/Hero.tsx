'use client'
import { motion } from "motion/react";
import Marquee from "./Marquee";
import { GravityStarsBackground } from "../animate-ui/components/backgrounds/gravity-stars";

interface Props {
  title: string;
  subtitle?: string;
  splitTitle?: boolean;
}

export default function Hero({ title, subtitle, splitTitle = false }: Props) {
  const words = title.split(' ');

  return (
    <div className="relative w-full h-dvh flex items-center justify-center bg-background overflow-hidden">
        <Marquee />
        <motion.div 
          initial={{ opacity: 0, y:50 }}
          animate={{ opacity: 1, y: 0}}
          transition={{ duration: 0.8, ease:'easeInOut'}}
          className="relative z-10 text-center">
          <h1
            className="hero-title font-cinzel text-5xl md:text-7xl lg:text-8xl font-cinzel-decorative">
            {splitTitle ? (
              <>
                <span>{words[0]}</span>
                <br />
                <span>{words.slice(1).join(' ')}</span>
              </>
            ) : (
              title
            )}
          </h1>
          {subtitle && (
            <p
              className="hero-subtitle mt-4 text-muted-foreground font-bold">
              {subtitle}
            </p>
          )}
        </motion.div>
    </div>
  );
}