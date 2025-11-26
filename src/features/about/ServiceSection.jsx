import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { cn } from "@/lib/utils";
import {
  SiFramer,
  SiMdnwebdocs,
  SiMobx,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPalette,
  FaDatabase,
  FaCogs,
} from "react-icons/fa";
import { RiApps2AddFill } from "react-icons/ri";
import { CloudCog, ShoppingCart } from "lucide-react";

import Marquee from "@/components/ui/marquee";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import { StackCardBadge } from "@/components/ui/shared/StackCardBadge";

const services = [
  { icon: <FaLaptopCode />, name: "Web Development" },
  { icon: <FaMobileAlt />, name: "Mobile App Design" },
  { icon: <FaPalette />, name: "UI/UX Design" },
  { icon: <FaDatabase />, name: "Database Integration" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS Styling" },
  { icon: <SiMobx />, name: "State Management" },
  { icon: <SiReact />, name: "React Development" },
  { icon: <FaCogs />, name: "API Integration" },
  { icon: <CloudCog />, name: "SaaS Solutions" },
  { icon: <SiFramer />, name: "Animations & Interactivity" },
  { icon: <SiMdnwebdocs />, name: "Progressive Web Apps" },
  { icon: <ShoppingCart />, name: "E-commerce Development" },
  { icon: <SiReact />, name: "Custom Component Libraries" },
  { icon: <SiMobx />, name: "Frontend Optimization" },
  { icon: <FaLaptopCode />, name: "Tech Consultation" },
  { icon: <FaMobileAlt />, name: "Responsive Design" },
];

const firstRow = services.slice(0, services.length / 2);
const secondRow = services.slice(services.length / 2);

const ServiceSection = ({ className }) => {
  return (
    <Card
      className={cn(
        "w-full  rounded-xl bg-[#111] border border-neutral-800 py-4 gap-0 overflow-hidden relative",
        className
      )}
    >
      <CardHeader className="space-y-0 p-0 mb-4  text-center">
        <CardTitle className="flex justify-center items-center gap-2 text-sm text-neutral-300">
          <RiApps2AddFill className="h-4 w-4 text-purple-500 " />
          <p>Services</p>
        </CardTitle>
        <CardDescription className="text-lg  font-semibold text-white">
          Solutions Suite
        </CardDescription>
      </CardHeader>

      <Marquee pauseOnHover className="[--duration:30s] p-1 ">
        {firstRow.map((stack, index) => (
          <StackCardBadge key={index} icon={stack.icon} name={stack.name} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:30s] p-1 ">
        {secondRow.map((stack, index) => (
          <StackCardBadge key={index} icon={stack.icon} name={stack.name} />
        ))}
      </Marquee>

      <InteractiveHoverButton
        text="View All Services"
        className="absolute left-1/2 -translate-x-1/2 bottom-4 text-primary-foreground bg-linear-to-r ring-2 ring-zinc-600 border-0 from-[#B3A4FD] via-[#A290FC] to-[#B3A4FD] w-44 rounded-sm"
        link="/services"
      />
    </Card>
  );
};

export default ServiceSection;
