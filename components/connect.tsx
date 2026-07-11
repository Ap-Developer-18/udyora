"use client";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import SectionHeader from "./common/section-header";
import Button from "./common/button";

const approvalOptions = [
  "Land Due Diligence",
  "Change of Land Use",
  "Building Plan Approval",
  "Environmental Clearance",
  "Fire Safety Approval",
  "Occupancy Certification",
  "Tool And Prototype Design",
];

const DROPDOWN_PLACEHOLDER = "Consultation Required For";

const initialFormData = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  message: "",
};

export default function Connect({ isOpen }: { isOpen?: boolean }) {
  const [open, setOpen] = useState(false);
  const [selectedApproval, setSelectedApproval] = useState<string | null>(null);
  const [formData, setFormData] = useState(initialFormData);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const resetForm = () => {
    setFormData(initialFormData);
    setSelectedApproval(null);
    setOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen]);

  // Close dropdown when clicking outside of it, without changing the selection
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          approvalRequirement: selectedApproval,
        }),
      });

      const data = await response.json();

      console.log(data);

      if (data.success) {
        alert("Message Sent Successfully");
        resetForm();
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      console.error(err);
      alert("Server Error");
    }
  };

  return (
    <section id="connect" className="container pt-16 lg:pt-24 scroll-mt-10">
      <SectionHeader
        title="Connect"
        description="Ready to move your project forward? Discuss your approval requirements with our experts and build a clear roadmap for successful execution."
      />

      <div className="rounded-md border border-white/10 lg:grid lg:grid-cols-2 overflow-hidden">
        <div className="p-4 lg:p-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                required
                placeholder="John Doe"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    fullName: e.target.value,
                  })
                }
                className="w-full rounded-md border border-white/10 bg-transparent px-4 py-4 text-white outline-none placeholder:text-subtitle"
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="w-full rounded-md border border-white/10 bg-transparent px-4 py-4 text-white outline-none placeholder:text-subtitle"
                />
              </div>

              <div>
                <input
                  type="text"
                  required
                  placeholder="+91 9876543210"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value,
                    })
                  }
                  className="w-full rounded-md border border-white/10 bg-transparent px-4 py-4 text-white outline-none placeholder:text-subtitle"
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                required
                placeholder="Your Company Name"
                value={formData.companyName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    companyName: e.target.value,
                  })
                }
                className="w-full rounded-md border border-white/10 bg-transparent px-4 py-4 text-white outline-none placeholder:text-subtitle"
              />
            </div>
            <div className="relative" ref={dropdownRef}>
              <input
                type="text"
                required
                value={selectedApproval ?? ""}
                onChange={() => {}}
                className="absolute inset-0 h-full w-full pointer-events-none opacity-0"
                tabIndex={-1}
                aria-hidden="true"
              />
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="flex w-full items-center justify-between rounded-md border border-white/10 px-4 py-4 text-left"
              >
                <span
                  className={selectedApproval ? "text-white" : "text-subtitle"}
                >
                  {selectedApproval || DROPDOWN_PLACEHOLDER}
                </span>

                <ChevronDown
                  size={18}
                  className={`text-subtitle transition ${open ? "rotate-180" : ""}`}
                />
              </button>
              {open && (
                <div className="absolute left-0 top-full z-20 mt-2 w-full max-h-56 overflow-y-auto rounded-md border border-white/10 bg-[#0c1520] shadow-xl">
                  {approvalOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setSelectedApproval(option);
                        setOpen(false);
                      }}
                      className="block w-full px-4 py-3 text-left text-subtitle hover:bg-white/5 transition-colors duration-150"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div>
              <textarea
                rows={5}
                required
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                className="w-full rounded-md border border-white/10 bg-transparent px-4 py-4 text-white outline-none placeholder:text-subtitle"
              />
            </div>
            <Button
              className="w-full justify-between!"
              type="submit"
              text="Click To Connect"
            />
          </form>
        </div>

        <div className="relative max-lg:hidden">
          <img
            src="/about-udyora.webp"
            alt="Consultation"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#050505]/85 via-30% to-transparent" />
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:gap-6 md:grid-cols-3">
        <div className="rounded-md border border-white/10 p-4 text-center">
          <h4 className="text-xl lg:text-2xl text-subtitle font-fraunces">
            Office
          </h4>
          <p className="mt-1 text-subtitle">
            digitally in INDIA <br /> for the WORLD
          </p>
        </div>

        <div className="rounded-md border border-white/10 p-4 text-center">
          <h4 className="text-xl lg:text-2xl text-subtitle font-fraunces">
            Working Hours
          </h4>
          <p className="mt-1 text-subtitle">
            Monday - Saturday
            <br />
            9:00 AM - 6:00 PM
          </p>
        </div>

        <div className="rounded-md border border-white/10 p-4 text-center">
          <h4 className="text-xl lg:text-2xl text-subtitle font-fraunces">
            Contact
          </h4>
          <p className="mt-1 text-subtitle">
            +91 99905 33555
            <br />
            udyora@yahoo.com
          </p>
        </div>
      </div>
    </section>
  );
}
