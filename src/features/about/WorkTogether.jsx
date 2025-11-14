import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  FaLightbulb,
  FaSitemap,
  FaCode,
  FaMobileAlt,
  FaRocket,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { ShineBorder } from "@/components/ui/shine-border";

import { cn } from "@/lib/utils";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { ArrowUpRight, Calendar, Contact } from "lucide-react";
import { SiFiverr, SiGmail } from "react-icons/si";
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
    <div
      className={cn(
        "relative flex w-full flex-col  items-center justify-center overflow-hidden bg-[#101010]  md:shadow-xl",
        className
      )}
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      borderWidth={1}
    >
      <Card className="bg-transparent  border-0 rounded-none px-0 w-full ">
        <div className="flex flex-col px-0 py-4  w-full">
          <CardHeader className="flex item-center  gap-0 self-center space-y-0 p-0">
            <CardTitle className="text-base flex flex-col gap-2 items-center  text-neutral-400  ">
              <div className="bg-gray-900 p-2 rounded-full border border-gray-600">
                <MdOutlineConnectWithoutContact className="h-10 w-10 text-purple-500 " />
              </div>
              <p className="text-center text-xl">Let's Work Together</p>
            </CardTitle>
            <CardDescription className="self-center pt-0  font-semibold  text-center text-neutral-200">
              Let's Make Magic Happen Together!
            </CardDescription>
          </CardHeader>
          <div className="grid grid-cols-1   gap-2.5 mt-4">
            {workflowData.map((stack, index) => (
              <ContactButton key={index} icon={stack.icon} text={stack.text} />
            ))}
          </div>
        </div>
      </Card>
    </div>
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
