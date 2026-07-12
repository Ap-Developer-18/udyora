import { ArrowUp } from "lucide-react";
import SectionHeader from "./common/section-header";
import Image from "next/image";

const services = [
  {
    title: "Land Due Diligence",
    description:
      "Ownership verification, zoning assessment, feasibility analysis, and comprehensive regulatory review before project initiation.",
  },
  {
    title: "Change of Land Use",
    description:
      "End-to-end documentation, application preparation, and coordination for seamless land use conversion approvals.",
  },
  {
    title: "Building Plan Approval",
    description:
      "Preparation and submission of compliant architectural and engineering plans for statutory approvals.",
  },
  {
    title: "Environmental Clearance",
    description:
      "Regulatory support, statutory documentation, and environmental compliance management for project approvals.",
  },
  {
    title: "Fire Safety Approval",
    description:
      "Comprehensive fire compliance planning, documentation, and coordination with relevant authorities.",
  },
  {
    title: "Occupancy Certification",
    description:
      "Final inspections, authority liaison, and certification support to ensure operational readiness.",
  },
  {
    title: "Tool And Prototype Design",
    description:
      "Concept design, precision engineering, and rapid prototyping to validate ideas and accelerate product development.",
  },
];

export default function Forte() {
  return (
    <section id="forte" className="container scroll-mt-10 pt-16 lg:pt-24">
      <SectionHeader
        title="Forte"
        description="Complete approval lifecycle under one roof. We simplify complex regulatory processes and accelerate project execution through integrated approval solutions."
      />

      <div className="grid grid-cols-1 items-stretch gap-8 border-t border-white/10 pt-4 lg:grid-cols-12 lg:gap-12 lg:pt-8">
        {/* Services */}
        <div className="lg:col-span-7">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group border-b border-white/10 py-3 ${
                index === services.length - 1 ? "border-b-0" : ""
              }`}
            >
              <h3 className="text-lg font-medium text-beige-80 transition-transform duration-300 group-hover:translate-x-2 max-lg:text-center">
                {service.title}
              </h3>

              <p className="mt-1 max-w-2xl text-subtitle max-lg:mx-auto max-lg:text-center max-sm:text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="lg:col-span-5">
          <div className="relative h-full max-lg:aspect-4/4 lg:min-h-105 overflow-hidden rounded-md border border-[#fff9f333]">
            <Image
              src="/services.webp"
              alt="Core Services"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover max-lg:object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
