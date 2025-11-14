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
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { ArrowUpRight } from "lucide-react";
import { SiFiverr } from "react-icons/si";
const workflowData = [
  {
    icon: <FaFacebook className="h-4 w-4 text-blue-400" />,
    name: "Sadman Showmik",
    description: "Understanding client needs and defining the project scope.",
  },
  {
    icon: <InstagramLogoIcon className="h-4 w-4 text-red-400" />,
    name: "Sadman Showmik",
    description:
      "Designing the project structure, choosing the right tools, and planning the development phases.",
  },
  {
    icon: <LinkedInLogoIcon className="h-4 w-4 text-blue-400" />,
    name: "Linkedin",
    description:
      "Building reusable components, integrating APIs, and managing state effectively using tools like React, Redux, or MobX.",
  },
  {
    icon: <SiFiverr className="h-7 w-7 text-emerald-500" />,
    name: "Fiverr",
    description:
      "Building reusable components, integrating APIs, and managing state effectively using tools like React, Redux, or MobX.",
  },
];
const FollowMe = ({ className }) => {
  return (
    <div
      className={cn(
        "relative flex w-full flex-col min-w-2/3 items-center justify-center overflow-hidden bg-[#101010]  md:shadow-xl",
        className
      )}
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      borderWidth={1}
    >
      <Card className="bg-transparent  border-0 rounded-none px-0 w-full ">
        <div className="flex flex-col px-0 py-4  w-full">
          <CardHeader className="flex item-center  gap-0 self-center space-y-0 p-0">
            <CardTitle className="text-base flex  gap-2 items-center  text-neutral-400  ">
              <FaCode className="h-4 w-4 text-purple-500 " />
              <p className="text-center">Follow Me</p>
            </CardTitle>
            <CardDescription className="self-center pt-0 text-xl font-semibold  text-center text-neutral-200">
              Online Presence
            </CardDescription>
          </CardHeader>
          <div className="grid grid-cols-1   gap-2.5 mt-4">
            {workflowData.map((stack, index) => (
              <StackCardBadge key={index} icon={stack.icon} name={stack.name} />
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FollowMe;

const StackCardBadge = ({ icon, name }) => {
  return (
    <Card className="relative group  flex overflow-hidden flex-col flex-1 cursor-pointer rounded-sm bg-zinc-900 border-0 ">
      <CardContent className="flex gap-2 relative px-3 py-1 rounded-sm border  border-solid border-neutral-800 items-center justify-between ">
        <div className="flex items-center gap-3">
          <div className="flex justify-center items-center px-3 w-9 h-9 rounded-xl bg-zinc-800">
            <div className="flex justify-center items-center text-[#999999]">
              {icon}
            </div>
          </div>
          <div className="grow shrink my-auto text-sm font-semibold text-stone-300">
            {name}
          </div>
        </div>
        <div className="opacity-0 group-hover:opacity-100 group-hover:transition-opacity  group-hover:animate-once group-hover:animate-shine duration-300">
          <ArrowUpRight className="text-white/50" strokeWidth={1} />
        </div>
      </CardContent>
    </Card>
  );
};
