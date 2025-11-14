import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
  FaServicestack,
} from "react-icons/fa";
import { RiApps2AddFill } from "react-icons/ri";
import { CloudCog, ShoppingCart } from "lucide-react";

import { ShineBorder } from "@/components/ui/shine-border";
import Marquee from "@/components/ui/marquee";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";

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
    <Card className="w-full rounded-xl bg-[#111] border border-neutral-800 py-4 gap-0 overflow-hidden relative">
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
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-primary-foreground bg-linear-to-r from-[#B3A4FD] via-[#A290FC] to-[#B3A4FD] w-60 rounded-sm "
        link="/services"
      />
    </Card>
  );
};

export default ServiceSection;

const StackCardBadge = ({ icon, name }) => {
  return (
    <Card className="relative m-0 flex overflow-hidden  flex-col flex-1 cursor-pointer rounded-sm bg-transparent p-0 border-0">
      <CardContent className="flex gap-2 bg-zinc-900 relative px-3 py-1 rounded-sm border items-center border-solid border-neutral-800">
        <div className="flex justify-center items-center px-3 w-10 h-10 rounded-xl bg-zinc-800">
          <div className="flex justify-center items-center text-[#999999]">
            {icon}
          </div>
        </div>
        <div className="grow shrink my-auto text-sm font-semibold text-stone-300">
          {name}
        </div>
      </CardContent>
    </Card>
  );
};
