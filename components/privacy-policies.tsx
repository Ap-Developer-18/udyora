"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0B1622] text-white">
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex rounded-full border border-[#00C8B3]/20 bg-[#00C8B3]/10 px-4 py-1 text-sm font-medium text-[#00C8B3]"
          >
            Legal
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-5xl font-semibold tracking-tight md:text-6xl"
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-3xl text-lg leading-8 text-white/70"
          >
            At Udyora Ventures, we respect your privacy and are committed to
            protecting the personal information you share with us. This Privacy
            Policy explains how we collect, use, store, and safeguard your
            information when you interact with our website and services.
          </motion.p>

          <p className="mt-8 text-sm text-white/40">
            Effective Date: July 13, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="space-y-12">
          <PolicySection
            title="1. Information We Collect"
            content={[
              "Full Name",
              "Email Address",
              "Phone Number",
              "Company Name",
              "Project Details and Consultation Requirements",
              "Any information voluntarily submitted through our forms",
              "Technical information such as IP address, browser, device information, operating system, pages visited, and website analytics.",
            ]}
          />

          <PolicySection
            title="2. How We Use Your Information"
            content={[
              "Respond to consultation requests.",
              "Communicate regarding your projects.",
              "Provide regulatory advisory and approval services.",
              "Improve website performance and user experience.",
              "Maintain internal records.",
              "Comply with legal and regulatory obligations.",
            ]}
          />

          <PolicySection
            title="3. Information Sharing"
            paragraphs={[
              "We do not sell, rent, or trade your personal information.",
              "Your information may only be shared with government authorities, professional consultants, trusted service providers, or legal authorities when required for project execution or by law.",
            ]}
          />

          <PolicySection
            title="4. Data Security"
            paragraphs={[
              "We implement appropriate technical and organizational security measures to protect your information against unauthorized access, disclosure, alteration, or destruction. While we strive to use commercially acceptable methods to protect your data, no method of electronic storage or transmission over the Internet is completely secure.",
            ]}
          />

          <PolicySection
            title="5. Cookies"
            paragraphs={[
              "Our website may use cookies and similar technologies to improve website functionality, analyze traffic, and enhance user experience. You can disable cookies through your browser settings if preferred.",
            ]}
          />

          <PolicySection
            title="6. Third-Party Services"
            paragraphs={[
              "Our website may include links to third-party websites or integrate third-party services such as analytics or mapping tools. We are not responsible for the privacy practices of those external websites.",
            ]}
          />

          <PolicySection
            title="7. Data Retention"
            paragraphs={[
              "We retain personal information only for as long as necessary to fulfill the purposes described in this Privacy Policy or as required by applicable laws.",
            ]}
          />

          <PolicySection
            title="8. Your Rights"
            content={[
              "Request access to your personal information.",
              "Request correction of inaccurate information.",
              "Request deletion of your information where legally applicable.",
              "Withdraw consent where applicable.",
              "Contact us regarding privacy concerns.",
            ]}
          />

          <PolicySection
            title="9. Children's Privacy"
            paragraphs={[
              "Our services are intended for businesses and professionals. We do not knowingly collect personal information from individuals under the age of 18.",
            ]}
          />

          <PolicySection
            title="10. Policy Updates"
            paragraphs={[
              "We may update this Privacy Policy periodically. Any changes will be published on this page along with the revised effective date.",
            ]}
          />

          <PolicySection
            title="11. Contact Us"
            paragraphs={[
              "If you have any questions regarding this Privacy Policy, please contact us.",
            ]}
          />

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold">Udyora Ventures</h3>

            <div className="mt-6 space-y-3 text-white/70">
              <p>Email: daksh@udyora.com</p>
              <p>Phone: +91 99905 33555</p>
              <p>Working Hours: Monday – Saturday | 9:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

type PolicySectionProps = {
  title: string;
  paragraphs?: string[];
  content?: string[];
};

function PolicySection({ title, paragraphs, content }: PolicySectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
    >
      <h2 className="mb-5 text-2xl font-semibold">{title}</h2>

      {paragraphs?.map((paragraph, index) => (
        <p key={index} className="leading-8 text-white/70">
          {paragraph}
        </p>
      ))}

      {content && (
        <ul className="mt-4 space-y-3">
          {content.map((item, index) => (
            <li key={index} className="flex gap-3 leading-7 text-white/70">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#00C8B3]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.section>
  );
}
