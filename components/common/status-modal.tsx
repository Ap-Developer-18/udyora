"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export type StatusModalState = {
  type: "success" | "error";
  title: string;
  message: string;
} | null;

export default function StatusModal({
  state,
  onClose,
}: {
  state: StatusModalState;
  onClose: () => void;
}) {
  const isSuccess = state?.type === "success";

  return (
    <AnimatePresence>
      {state && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 22, stiffness: 300 }}
            className="relative w-full max-w-sm rounded-xl border border-white/10 bg-[#0c1520] p-6 sm:p-8 text-center shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/5"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center">
              {isSuccess ? <SuccessIllustration /> : <ErrorIllustration />}
            </div>

            <h3 className="text-xl sm:text-2xl font-fraunces font-medium text-white mb-2">
              {state.title}
            </h3>
            <p className="text-white/50 text-sm mb-6">{state.message}</p>

            <button
              onClick={onClose}
              className={`w-full rounded-md px-4 py-3 text-sm font-medium transition-colors ${
                isSuccess
                  ? "bg-white text-[#0c1520] hover:bg-white/90"
                  : "border border-white/10 text-white hover:bg-white/5"
              }`}
            >
              {isSuccess ? "Done" : "Try Again"}
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function SuccessIllustration() {
  return (
    <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.circle
        cx="48"
        cy="48"
        r="44"
        stroke="#22c55e"
        strokeWidth="3"
        strokeOpacity="0.25"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      />
      <motion.circle
        cx="48"
        cy="48"
        r="34"
        fill="#22c55e"
        fillOpacity="0.12"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.35, delay: 0.05 }}
      />
      <motion.path
        d="M32 49L43 60L65 37"
        stroke="#22c55e"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.45, delay: 0.3, ease: "easeOut" }}
      />
    </svg>
  );
}

function ErrorIllustration() {
  return (
    <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.circle
        cx="48"
        cy="48"
        r="44"
        stroke="#ff2244"
        strokeWidth="3"
        strokeOpacity="0.25"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      />
      <motion.circle
        cx="48"
        cy="48"
        r="34"
        fill="#ff2244"
        fillOpacity="0.12"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.35, delay: 0.05 }}
      />
      <motion.g
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.35, delay: 0.25 }}
      >
        <path
          d="M38 38L58 58M58 38L38 58"
          stroke="#ff2244"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
      </motion.g>
    </svg>
  );
}
