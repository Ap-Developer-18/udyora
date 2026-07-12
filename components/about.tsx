import { ArrowUp, Star } from "lucide-react";
import SectionHeader from "./common/section-header";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="container pt-16 lg:pt-24 scroll-mt-10">
      <SectionHeader
        title="About"
        description="Discover how Udyora simplifies complex approval journeys through regulatory expertise, technical precision, and coordinated execution."
      />
      <div className="rounded-md border border-white/10 p-4 sm:p-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative h-full aspect-4/3 md:aspect-4/2 lg:aspect-4/3 overflow-hidden rounded-md border border-[#fff9f333]">
            <Image
              src="/about-udyora.webp"
              alt="About Udyora"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
              className="object-cover object-right"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="mb-3 w-fit flex items-center gap-2 rounded-sm bg-[#2c2c2cb3] max-sm:text-sm px-2 sm:px-3 py-2 text-beige-100">
              <Star className="size-4 sm:size-5.5" size={22} /> Regulatory
              Excellence
            </span>

            <h3 className="font-fraunces text-2xl sm:text-3xl lg:text-4xl leading-tight text-beige-100">
              Your Trusted Partner For Project Approvals & Compliance
            </h3>

            <p className="mt-3 sm:mt-4 md:mt-6 sm:text-lg sm:leading-relaxed text-subtitle">
              Udyora is a project advisory and regulatory solutions company
              specializing in obtaining statutory approvals required for
              development projects.
            </p>

            <p className="mt-2 sm:text-lg sm:leading-relaxed text-subtitle">
              Our multidisciplinary team coordinates technical documentation,
              regulatory compliance, and government approvals, enabling clients
              to focus on execution while we manage the complete approval
              journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
