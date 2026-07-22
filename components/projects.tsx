"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import SectionHeader from "./common/section-header";
import { ArrowLeft, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const projects = [
  {
    logo: "/avant-grade.webp",
    client: "Avant Garde Cleanroom and Engg Solutions Private Limited",
    department: "TCP Haryana",
    services: [
      "Change of Land Use | TCP Haryana",
      "Building Plan Approval | TCP Haryana",
      "no data",
    ],
  },
  {
    logo: "/jyoti.webp",
    client: "Jyoti Solutions Works Private Limited",
    department: "TCP Haryana",
    services: [
      "Change of Land Use | TCP Haryana",
      "Building Plan Approval | TCP Haryana",
      "Environmental NOC | HSPCB Haryana",
    ],
  },
  {
    logo: "/nifco.webp",
    client: "Nifco India Private Limited",
    department: "HSIIDC Haryana",
    services: [
      "Building Plan Approval | HSIIDC Haryana",
      "Fire Safety Approval | DGFS Haryana",
      "no data",
    ],
  },
  {
    logo: "/indian-oil.svg",
    client: "Indian Oil Corporation Limited",
    department: "R&D Haryana",
    services: [
      "Tool Design | R&D Haryana",
      "Building Plan Approval | R&D Haryana",
      "no data",
    ],
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="projects"
      className="container pt-16 lg:pt-24 scroll-mt-10 overflow-hidden"
    >
      <SectionHeader
        title="Projects"
        description="A selection of projects where Udyora successfully managed regulatory approvals, technical documentation, and statutory compliance across multiple sectors."
      />

      <div className="mt-10 project-swiper-wrapper flex flex-col items-center">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            prevEl: ".project-prev",
            nextEl: ".project-next",
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
              loop: true,
            },
          }}
          className="w-full"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.client} className="h-auto py-2">
              <div className="h-full rounded-md border border-white/10 overflow-hidden bg-white/2 transition-all duration-300 hover:border-beige-100/20 flex flex-col items-center text-center">
                <div className="w-full aspect-4/2 overflow-hidden p-4 border border-white/10 bg-white flex items-center justify-center">
                  <img
                    src={project.logo}
                    alt={project.client}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="flex flex-col items-center justify-between grow w-full">
                  <div className="p-6 pb-2 border-b border-white/30 w-full">
                    <h3
                      className={`${project.client === "Avant Garde Cleanroom and Engg Solutions Private Limited" && "max-w-none!"} font-fraunces max-w-50! mx-auto w-full pb-2 text-beige-100`}
                    >
                      {project.client}
                    </h3>
                  </div>

                  <div className="p-6 w-full flex flex-col items-center">
                    <div className="flex flex-wrap justify-center gap-2">
                      {project.services.map((service) => (
                        <span
                          key={service}
                          className={`${service === "no data" && "opacity-0"} ${service === "Building Plan Approval | R&D Haryana" && "opacity-0"} rounded-full border border-white/10 px-3 py-1 text-sm text-beige-100 bg-white/5`}
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Controls (Stable & No layout shifting) */}
        <div className="mt-6 md:mt-8 flex items-center gap-6 select-none">
          <button className="project-prev flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-beige-100 hover:bg-white/5 hover:border-beige-100/30 active:scale-95 transition-all cursor-pointer">
            <ArrowLeft size={18} />
          </button>

          <div className="font-mono text-sm tracking-widest text-beige-100 min-w-[50px] text-center">
            <span className="text-white font-semibold">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span className="opacity-40 mx-1">/</span>
            <span className="opacity-40">
              {String(projects.length).padStart(2, "0")}
            </span>
          </div>

          <button className="project-next flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-beige-100 hover:bg-white/5 hover:border-beige-100/30 active:scale-95 transition-all cursor-pointer">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
