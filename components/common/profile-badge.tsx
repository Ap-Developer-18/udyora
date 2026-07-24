"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProfileCardProps {
  name?: string;
  statusText?: string;
  imageUrl?: string;
  isOnline?: boolean;
  phoneNumber?: string;
  onClick?: () => void;
}

export default function ProfileBadge({
  name = "Satish Rawat",
  statusText = "Online",
  imageUrl = "/satish-rawat.png",
  isOnline = true,
  phoneNumber = "919990533555",
  onClick,
}: ProfileCardProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const cycle = () => {
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);

      const showTimer = setTimeout(() => {
        setIsVisible(true);
      }, 8000);

      return { hideTimer, showTimer };
    };

    let timers = cycle();
    const interval = setInterval(() => {
      timers = cycle();
    }, 8000);

    return () => {
      clearTimeout(timers.hideTimer);
      clearTimeout(timers.showTimer);
      clearInterval(interval);
    };
  }, []);

  // Handle WhatsApp Click Action
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      const message = encodeURIComponent(
        `Hello ${name}, I saw your badge and want to discuss a project!`,
      );
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    }
  };

  return (
    // Fixed positioning in bottom-right corner aligned with container width
    <div className="fixed max-w-310 px-6 left-1/2 -translate-x-1/2 mx-auto w-full bottom-6 flex justify-end right-6 z-50 pointer-events-auto">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            onClick={handleClick}
            className="inline-flex items-center gap-3.5 bg-[#122130]/80 backdrop-blur-md py-2.5 pl-3 pr-6 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.35)] border border-white/10 hover:border-white/20 cursor-pointer hover:shadow-[0_12px_35px_rgba(0,0,0,0.5)] transition-all duration-300 select-none group"
          >
            {/* Profile Image Container with Online Indicator */}
            <div className="relative shrink-0">
              <img
                src={imageUrl}
                alt={name}
                className="w-12 h-12 rounded-full object-cover bg-white/5 border border-white/10"
              />
              {/* Green Online Dot */}
              {isOnline && (
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#00A843] border-2 border-[#122130] rounded-full" />
              )}
            </div>

            {/* Text Info */}
            <div className="flex flex-col justify-center leading-tight">
              <h4 className="font-fraunces text-base font-semibold text-beige-100 tracking-wide group-hover:text-white transition-colors">
                {name}
              </h4>
              <p className="text-xs font-medium text-subtitle mt-0.5">
                {statusText}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
