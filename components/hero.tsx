"use client";
import type { NextPage } from "next";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Navbar } from "./common/navbar";
import Button from "./common/button";
import { ConsultationModal } from "./consultation-modal";
import { Star } from "lucide-react";

const Header: NextPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg: MotionValue<string> = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "30%"],
  );

  return (
    <>
      <Navbar />
      <main ref={containerRef} className="text-dark overflow-x-hidden relative">
        <section className="relative min-h-screen flex flex-col justify-end pb-16 pt-32 overflow-hidden">
          <motion.div style={{ y: yBg }} className="absolute inset-0 -z-10">
            <img
              src="/hero-one.webp"
              alt="India's Project Approval Intelligence Platform - Udyora Ventures"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-linear-to-t from-dark/95 via-dark/65 to-dark/30" />
          </motion.div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-white/5 rounded-full blur-[120px] pointer-events-none -z-10" />

          <div className="flex flex-col justify-center gap-6">
            <div className="p-4 mx-auto max-lg:hidden bg-[#122130]/50 w-full flex justify-center backdrop-blur-xs border border-white/10">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-white font-fraunces flex items-center gap-4 text-center font-medium leading-[120%] text-4xl tracking-tight"
              >
                One Window <Star />
                Every Approval <Star /> Zero Hassles
              </motion.h1>
            </div>
            <div className="p-4 mx-auto lg:hidden bg-[#122130]/50 w-full backdrop-blur-xs border border-white/10">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-white font-fraunces text-center font-medium leading-[150%] text-4xl tracking-tight"
              >
                One Window. <br />
                Every Approval. <br /> Zero Hassles.
              </motion.h1>
            </div>
            <div
              className="flex container justify-center"
              onClick={() => setIsModalOpen(true)}
            >
              <Button text="Consult Now" />
            </div>
          </div>
        </section>
      </main>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Header;
