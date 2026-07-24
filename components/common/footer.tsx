"use client";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { useState } from "react";
import StatusModal, { StatusModalState } from "./status-modal";

const quickLinks = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Forte", href: "#forte" },
  { title: "Projects", href: "#projects" },
];

const utilityLinks = [
  { title: "Value", href: "#why" },
  { title: "Team", href: "#team" },
  { title: "Connect", href: "#connect" },
  { title: "Privacy Policy", href: "/privacy-policy" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState<StatusModalState>(null);

  const handleSubmit = async () => {
    if (!email) {
      setModal({
        type: "error",
        title: "Email Required",
        message: "Please enter your email address.",
      });
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: "Footer Enquiry",
          email,
          phone: "",
          companyName: "",
          approvalRequirement: "Consultation Request",
          message: "Submitted from footer.",
        }),
      });

      if (!res.ok) throw new Error();

      setEmail("");

      setModal({
        type: "success",
        title: "Request Sent",
        message: "Thank you! Our team will get back to you shortly.",
      });
    } catch {
      setModal({
        type: "error",
        title: "Something Went Wrong",
        message: "Please try again in a few moments.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="container py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr_1.3fr]">
          <div>
            <h3 className="font-fraunces text-2xl text-beige-100 max-lg:text-center">
              Quick Links
            </h3>

            <div className="mt-3 space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="group flex items-center justify-between rounded-md border border-white/10 px-4 lg:px-6 py-3 transition-all duration-300 hover:border-beige-100/20"
                >
                  <span className="text-subtitle transition-colors group-hover:text-beige-100">
                    {link.title}
                  </span>

                  <ArrowUp
                    size={28}
                    className="rotate-45 text-beige-100 max-lg:size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-fraunces text-2xl text-beige-100 max-lg:text-center">
              Utility Pages
            </h3>

            <div className="mt-3 space-y-3">
              {utilityLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="group flex items-center justify-between rounded-md border border-white/10 px-4 lg:px-6 py-3 transition-all duration-300 hover:border-beige-100/20"
                >
                  <span className="text-subtitle transition-colors group-hover:text-beige-100">
                    {link.title}
                  </span>

                  <ArrowUp
                    size={28}
                    className="rotate-45 text-beige-100 max-lg:size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-fraunces text-2xl text-beige-100 max-lg:text-center">
              Schedule Consultation
            </h3>

            <p className="mt-2 leading-relaxed text-subtitle max-lg:text-center">
              Ready to move your project forward? Connect with our experts and
              build a clear roadmap from land acquisition to occupancy
              certification.
            </p>

            <div className="mt-6 lg:mt-8 flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 rounded-md border border-white/10 bg-transparent px-4 lg:px-6 py-3 text-white outline-none placeholder:text-subtitle"
              />

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="flex size-12 items-center justify-center rounded-md border border-white/10 transition-all hover:border-beige-100/20 disabled:opacity-50"
              >
                <ArrowUp
                  size={28}
                  className={`rotate-45 text-beige-100 max-lg:size-4 ${
                    loading ? "animate-pulse" : ""
                  }`}
                />
              </button>
            </div>

            <div className="mt-8 lg:mt-12 flex items-center gap-6 max-lg:justify-center">
              {/* LinkedIn */}
              <Link href="#" className="group">
                <div className="w-8 h-8">
                  <svg
                    className="w-full h-full text-beige-100 transition-opacity group-hover:opacity-70"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="2" y="4" width="20" height="18" rx="4" />
                    <path d="M7 10V17" />
                    <path d="M7 7H7.01" />
                    <path d="M11 17V10" />
                    <path d="M11 13C11 11.5 12 10 14 10C16 10 17 11.5 17 13V17" />
                  </svg>
                </div>
              </Link>

              {/* YouTube */}
              <Link href="#" className="group">
                <div className="w-8 h-8">
                  <svg
                    className="w-full h-full text-beige-100 transition-opacity group-hover:opacity-70"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="2" y="4" width="20" height="18" rx="4" />
                    <path
                      d="M10 9L15 12L10 15V9Z"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </div>
              </Link>

              {/* X */}
              <Link href="#" className="group">
                <div className="w-8 h-8">
                  <svg
                    className="w-full h-full text-beige-100 transition-opacity group-hover:opacity-70"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M4 4L20 20" />
                    <path d="M20 4L4 20" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex max-lg:text-center flex-col justify-center gap-4 py-4 lg:py-8 text-subtitle md:flex-row">
          <p>© 2026 Udyora Ventures Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
      <StatusModal state={modal} onClose={() => setModal(null)} />
    </footer>
  );
}
