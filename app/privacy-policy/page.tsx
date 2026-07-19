"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import SectionHeader from "@/components/common/section-header";
import { Navbar } from "@/components/common/navbar";
import Footer from "@/components/common/footer";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: [
      'Udyora Ventures Pvt Ltd ("Udyora", "we", "our", or "us") is committed to protecting the privacy of individuals and organizations who interact with our website, services, and consultation channels.',
      "This Privacy Policy explains how we collect, use, store, and protect the information you share with us when you use our regulatory advisory, approval, and compliance services.",
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: [
      "We may collect the following categories of information when you interact with us:",
    ],
    list: [
      "Personal details such as full name, email address, and phone number provided through our consultation and newsletter forms.",
      "Company information including company name and project-related details shared during consultation requests.",
      "Project and regulatory documentation submitted for approval, due diligence, or compliance advisory purposes.",
      "Technical data such as browser type, device information, and usage patterns collected automatically while you browse our website.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "How We Use Your Information",
    content: ["The information we collect is used to:"],
    list: [
      "Respond to consultation requests and schedule discussions with our advisory team.",
      "Prepare, process, and coordinate statutory approvals and compliance documentation on your behalf.",
      "Communicate project updates, regulatory timelines, and relevant service information.",
      "Improve our website, services, and overall client experience.",
      "Comply with applicable legal and regulatory obligations.",
    ],
  },
  {
    id: "data-sharing",
    title: "Data Sharing and Disclosure",
    content: [
      "Udyora does not sell or trade personal information. We may share information with relevant government authorities, regulatory bodies, and statutory departments strictly as necessary to process approvals and compliance requirements on your behalf.",
      "We may also share information with trusted service providers who assist in operating our website and business, subject to confidentiality obligations.",
    ],
  },
  {
    id: "data-security",
    title: "Data Security",
    content: [
      "We implement reasonable technical and organizational measures to protect the confidentiality, integrity, and security of the information you share with us, including project and regulatory documentation.",
      "While we take appropriate precautions, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: [
      "We retain personal and project-related information only for as long as necessary to fulfil the purposes outlined in this policy, or as required by applicable statutory, regulatory, or contractual obligations.",
    ],
  },
  {
    id: "your-rights",
    title: "Your Rights",
    content: ["You may, at any time, request to:"],
    list: [
      "Access the personal information we hold about you.",
      "Request correction of inaccurate or incomplete information.",
      "Request deletion of your personal information, subject to legal and regulatory retention requirements.",
      "Withdraw consent for communications such as newsletters or promotional updates.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies and Website Usage",
    content: [
      "Our website may use cookies or similar technologies to enhance browsing experience and analyze site performance. You may disable cookies through your browser settings; however, this may affect certain website functionalities.",
    ],
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    content: [
      "Our website may contain links to third-party websites or platforms. Udyora is not responsible for the privacy practices or content of such external sites.",
    ],
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal requirements. The updated version will be posted on this page with a revised effective date.",
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    content: [
      "If you have any questions or concerns regarding this Privacy Policy or how your information is handled, please reach out to us:",
    ],
    contact: true,
  },
];

export default function PrivacyPolicies() {
  const [activeId, setActiveId] = useState(sections[0].id);

  // Scroll-position based scroll-spy. IntersectionObserver with a
  // "-20% 0px -70% 0px" rootMargin doesn't reliably fire for short
  // sections (nothing ever intersects that thin band), so the active
  // id never updated. This walks the sections on every scroll frame
  // and picks the last one whose top has crossed a fixed offset —
  // always resolves to exactly one active section.
  const updateActiveSection = useCallback(() => {
    const offset = 160; // px from top of viewport (below sticky navbar)
    let current = sections[0].id;

    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (!el) continue;
      if (el.getBoundingClientRect().top - offset <= 0) {
        current = s.id;
      } else {
        break;
      }
    }

    setActiveId((prev) => (prev === current ? prev : current));
  }, []);

  useEffect(() => {
    updateActiveSection();

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [updateActiveSection]);

  return (
    <>
      <Navbar />
      <section className="pt-42">
        <div className="container">
          <div className="border-b border-dark-20">
            <SectionHeader
              className="mb-6! max-lg:text-center"
              title="Privacy Policy"
              description="This Privacy Policy describes how Udyora Ventures Pvt Ltd collects,
            uses, and protects the information shared with us through our
            website and regulatory advisory services."
            />
          </div>
          {/* Body: TOC + Content */}
          <div className="mt-16 grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
            {/* Table of contents */}
            <aside className="max-lg:hidden">
              <div className="sticky top-28">
                <h3 className="font-fraunces text-lg text-beige-100">
                  On this page
                </h3>

                <nav className="mt-5 space-y-1 border-l border-white/10">
                  {sections.map((s, i) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className={`block -ml-px border-l pl-4 py-1.5 text-sm transition-colors ${
                        activeId === s.id
                          ? "border-white text-beige-100"
                          : "border-transparent text-subtitle hover:text-beige-100"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}. {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Sections */}
            <div className="space-y-16 max-lg:text-center">
              {sections.map((section, i) => (
                <div key={section.id} id={section.id} className="scroll-mt-28">
                  <div className="flex items-baseline gap-3 max-lg:justify-center">
                    <span className="font-fraunces text-lg">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-fraunces text-2xl text-beige-100 lg:text-3xl">
                      {section.title}
                    </h2>
                  </div>

                  <div className="mt-5 space-y-4">
                    {section.content?.map((para, idx) => (
                      <p key={idx} className="leading-relaxed text-subtitle">
                        {para}
                      </p>
                    ))}
                  </div>

                  {section.list && (
                    <ul className="mt-5 space-y-3 max-lg:text-left">
                      {section.list.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 rounded-md border border-white/10 px-5 py-3.5 leading-relaxed text-subtitle transition-colors hover:border-beige-100/20"
                        >
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-white" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.contact && (
                    <div className="mt-6 rounded-md border border-white/10 px-6 py-6 lg:px-8">
                      <p className="font-fraunces text-xl text-beige-100">
                        Udyora Ventures Pvt Ltd
                      </p>
                      <div className="mt-4 space-y-2 text-subtitle">
                        <p>Phone: +91 99905 33555</p>
                        <p>Email: jsr@udyora.com</p>
                        <p>Digitally in INDIA, for the WORLD</p>
                      </div>

                      <Link
                        href="/#connect"
                        className="group mt-6 inline-flex items-center gap-2 rounded-md border border-white/10 px-5 py-3 text-sm text-beige-100 transition-all hover:border-beige-100/20"
                      >
                        Schedule a Consultation
                        <ArrowUp
                          size={16}
                          className="rotate-45 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
