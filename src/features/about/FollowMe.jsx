import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { FaCode, FaFacebook } from "react-icons/fa";

import { cn } from "@/lib/utils";
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

import { SiFiverr } from "react-icons/si";
import { StackCardBadge } from "@/components/ui/shared/StackCardBadge";
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
    <Card
      className={cn(
        "w-full rounded-xl bg-[#111] border border-neutral-800 px-2 py-4 gap-0 overflow-hidden relative",
        className
      )}
    >
      <CardHeader className="space-y-0 p-0 mb-4 text-center">
        <CardTitle className="flex justify-center items-center gap-2 text-sm text-neutral-300">
          <FaCode className="h-4 w-4 text-purple-500 " />
          <p className="text-center">Follow Me</p>
        </CardTitle>
        <CardDescription className="text-lg font-semibold text-white">
          Online Presence
        </CardDescription>
      </CardHeader>

      <div className="grid gap-2 px-3 ">
        {workflowData.map((item, index) => (
          <StackCardBadge key={index} icon={item.icon} name={item.name} />
        ))}
      </div>
    </Card>
  );
};

export default FollowMe;
