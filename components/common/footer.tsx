"use client";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { useState } from "react";
import StatusModal, { StatusModalState } from "./status-modal";

const quickLinks = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Forte", href: "#forte" },
  { title: "Value", href: "#why" },
];

const utilityLinks = [
  { title: "Team", href: "#team" },
  { title: "Projects", href: "#projects" },
  { title: "Connect", href: "#connect" },
  { title: "Privacy Policy", href: "#" },
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

      const res = await fetch("/api/consultation", {
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
              <Link href="#" className="group">
                <svg
                  className="size-8 text-beige-100 transition-opacity group-hover:opacity-70"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="18" cy="6" r="1" fill="currentColor" />
                </svg>
              </Link>

              <Link href="#" className="group">
                <svg
                  className="size-8 text-beige-100 transition-opacity group-hover:opacity-70"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="2" />
                  <path d="M7 10V17" />
                  <path d="M7 7H7.01" />
                  <path d="M11 17V10" />
                  <path d="M11 13C11 11.5 12 10 14 10C16 10 17 11.5 17 13V17" />
                </svg>
              </Link>

              <Link href="#" className="group">
                <svg
                  className="size-8 text-beige-100 transition-opacity group-hover:opacity-70"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 3C7.5 3 5 6 5 9.5C5 12 6.5 14 8.5 14C9 14 9.3 13.6 9.2 13.1L8.8 11.5C8.7 11 8.6 10.6 8.6 10.1C8.6 7.8 10.1 6.2 12.6 6.2C14.7 6.2 15.8 7.5 15.8 9.2C15.8 12 14.4 13.9 12.5 13.9C11.5 13.9 10.8 13.1 11.1 12.1L11.8 9.4C12 8.8 12.1 8.3 12.1 7.9C12.1 7 11.6 6.3 10.7 6.3C9.4 6.3 8.4 7.7 8.4 9.5C8.4 10.4 8.7 11 8.7 11L7.5 16C7.1 17.8 7.4 19 7.5 19.5C8 19.7 9.5 20 12 20C16.5 20 19 16.5 19 11.5C19 6.8 15.6 3 12 3Z" />
                </svg>
              </Link>

              <Link href="#" className="group">
                <svg
                  className="size-8 text-beige-100 transition-opacity group-hover:opacity-70"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M14 8H13C11.9 8 11 8.9 11 10V12H14L13.5 15H11V20" />
                </svg>
              </Link>

              <Link href="#" className="group">
                <svg
                  className="size-8 text-beige-100 transition-opacity group-hover:opacity-70"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M4 4L20 20" />
                  <path d="M20 4L4 20" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex max-lg:text-center flex-col justify-center gap-4 py-4 lg:py-8 text-subtitle md:flex-row">
          <p>© 2026 Udyora. All rights reserved.</p>
        </div>
      </div>
      <StatusModal state={modal} onClose={() => setModal(null)} />
    </footer>
  );
}
