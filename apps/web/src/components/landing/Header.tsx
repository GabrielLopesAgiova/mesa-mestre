'use client'

import Link from "next/link";
import { Button } from "../ui/button";
import { ThemeButton } from "../theme-button";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

export default function Header() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 100) // 10px só pra evitar flicker no topo
  })

  return (
<motion.header
  className="fixed top-0 left-0 z-20 w-full h-16 px-4"
  initial={false}
  animate={{
    backgroundColor: scrolled
      ? "var(--background)"
      : "transparent",
  }}
  transition={{ duration: 0.3, ease: "easeInOut" }}
>
      <div className="grid grid-cols-3 items-center h-full">

        <div className="justify-self-start">
          <Link href="/" className="font-cinzel-decorative">
            Mesa Mestre
          </Link>
        </div>

        <nav className="justify-self-center flex gap-12">
          <Button variant="link" className="font-bold cursor-pointer">Recursos</Button>
          <Button variant="link" className="font-bold cursor-pointer">Relatos</Button>
          <Button variant="link" className="font-bold cursor-pointer">Planos</Button>
        </nav>


        <div className="justify-self-end flex gap-4">
          <Button asChild>
            <Link href="/">Entrar</Link>
          </Button>

          <Button>Começar Agora</Button>

          <ThemeButton />
        </div>

      </div>
    </motion.header>
  );
}