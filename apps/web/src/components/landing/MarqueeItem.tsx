'use client'
import { motion } from "motion/react";

interface Props {
    text: string,
    from: number | string,
    to: number | string
}

const MarqueeItem = ({ text, from, to }: Props) => {
  return (
    <div className="flex">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex shrink-0"
      >
        <p>{text}</p>
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex shrink-0"
      >
        <p>{text}</p>
      </motion.div>
    </div>
  );
};

export default MarqueeItem;