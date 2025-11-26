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
    icon: <SiGmail className="h-4 w-4 text-red-400" />,
    text: "Email Me",
    description: "Understanding client needs and defining the project scope.",
  },
  {
    icon: <Calendar className="h-4 w-4 text-yellow-400" />,
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
        <CardTitle className="flex flex-col justify-center items-center gap-2 text-sm text-neutral-300">
          <div className="bg-gray-900 p-2 rounded-full border border-gray-600">
            <MdOutlineConnectWithoutContact className="h-10 w-10 text-purple-500 " />
          </div>
        </CardTitle>
        <CardDescription className="text-lg  font-semibold text-white">
          Let's Work Together
          <p className="text-sm  font-normal text-white">
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
    <button className="group flex bg-neutral-900 gap-2 relative px-3 py-2 rounded-sm border items-center justify-between border-solid border-neutral-800 hover:border-purple-600 h-16">
      <div className="flex items-center gap-3">
        <span className="text-purple-600 aspect-square">{icon}</span>
        <div className="self-end text-lg font-medium text-slate-200">
          {text}
        </div>
      </div>
      <div className="opacity-0 group-hover:opacity-100 group-hover:transition-opacity  group-hover:animate-once group-hover:animate-shine duration-300">
        <ArrowUpRight className="text-white/50" strokeWidth={1} />
      </div>
    </button>
  );
}
