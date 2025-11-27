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
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { ArrowUpRight, Calendar, Contact } from "lucide-react";
import { SiGmail } from "react-icons/si";
const workflowData = [
  {
    icon: (
      <SiGmail className="h-[clamp(0.9rem,1.4vw,1.1rem)] w-[clamp(0.9rem,1.4vw,1.1rem)]text-red-400" />
    ),
    text: "Email Me",
    description: "Understanding client needs and defining the project scope.",
  },
  {
    icon: (
      <Calendar className="h-[clamp(0.9rem,1.4vw,1.1rem)] w-[clamp(0.9rem,1.4vw,1.1rem)] text-yellow-400" />
    ),
    text: "Schedule",
    description:
      "Designing the project structure, choosing the right tools, and planning the development phases.",
  },
];
const WorkTogether = ({ className }) => {
  return (
    <Card
      className={cn(
        "w-full rounded-xl bg-[#111]  border border-neutral-800 py-4 gap-0 overflow-hidden ",
        className
      )}
    >
      <CardHeader className="space-y-0 p-0 mb-4  text-center">
        <CardTitle className="flex flex-col justify-center items-center gap-2 text-[clamp(0.8rem,1.3vw,1rem)] text-neutral-300">
          <div className="bg-gray-900 p-2 rounded-full border border-gray-600">
            <MdOutlineConnectWithoutContact className="h-[clamp(1.8rem,3vw,2.5rem)] w-[clamp(1.8rem,3vw,2.5rem)] text-purple-500 " />
          </div>
        </CardTitle>
        <CardDescription className="text-[clamp(0.9rem,1.6vw,1.2rem)]  font-semibold text-white">
          Let's Work Together
          <p className="text-[clamp(0.8rem,1.3vw,1rem)]  font-normal text-white">
            Let's Make Magic Happen Together!
          </p>
        </CardDescription>
      </CardHeader>
      <div className="grid grid-cols-1 p-2 gap-2">
        {workflowData.map((stack, index) => (
          <ContactButton key={index} icon={stack.icon} text={stack.text} />
        ))}
      </div>
    </Card>
  );
};

export default WorkTogether;

function ContactButton({ icon, text }) {
  return (
    <button className="group cursor-pointer flex bg-neutral-900 gap-2 relative px-3 py-2 rounded-sm border items-center justify-center border-solid border-neutral-800 hover:border-purple-600 h-16">
      <div className="flex items-center justify-center gap-3">
        <span className="text-purple-600 text-[clamp(1rem,2vw,1.4rem)] ">
          {icon}
        </span>
        <p className=" text-[clamp(0.9rem,1.6vw,1.2rem)] font-medium text-slate-200">
          {text}
        </p>
      </div>
      <div className="opacity-0 group-hover:opacity-100 group-hover:transition-opacity  group-hover:animate-once group-hover:animate-shine duration-300">
        <ArrowUpRight className="text-white/50" strokeWidth={1} />
      </div>
    </button>
  );
}
