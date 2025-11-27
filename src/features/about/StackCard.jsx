import React from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { FaCode, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMobx,
  SiShadcnui,
  SiNextdotjs,
  SiReactquery,
} from "react-icons/si";
import { StackCardBadge } from "@/components/ui/shared/StackCardBadge";

const stacksData = [
  {
    icon: <FaReact className="h-6 w-6 text-blue-500" />,
    name: "React JS",
  },
  {
    icon: <SiNextdotjs className="h-6 w-6 text-white/70" />,
    name: "Next JS",
  },
  {
    icon: <SiShadcnui className="h-6 w-6 text-green-500" />,
    name: "ShadCN",
  },
  {
    icon: <SiTailwindcss className="h-6 w-6 text-teal-500" />,
    name: "Tailwind CSS",
  },
  {
    icon: <SiMobx className="h-6 w-6 text-orange-500" />,
    name: "MOB X",
  },
  {
    icon: <SiReactquery className="h-6 w-6 text-red-500" />,
    name: "Tanstack Query",
  },
];

const StackCard = ({ className }) => {
  return (
    <Card
      className={cn(
        "w-full rounded-xl bg-[#111] border border-neutral-800 py-4 gap-3 space-y-4 overflow-hidden relative",
        className
      )}
    >
      <CardHeader className="space-y-0 p-0 mb-0  text-center">
        <CardTitle className="flex justify-center items-center gap-2 text-[clamp(0.8rem,1.2vw,1rem)] text-neutral-300">
          <FaCode className="text-purple-400 h-[clamp(0.9rem,1.4vw,1.1rem)] w-[clamp(0.9rem,1.4vw,1.1rem)]" />

          <p>My Stacks</p>
        </CardTitle>
        <CardDescription className="font-semibold text-white text-[clamp(1rem,1.8vw,1.4rem)]">
          Tech Arsenal
        </CardDescription>
      </CardHeader>

      <CardContent className="grid grid-cols-2 gap-3 px-3 py-0">
        {stacksData.map((stack, index) => (
          <StackCardBadge key={index} icon={stack.icon} name={stack.name} />
        ))}
      </CardContent>
    </Card>
  );
};

export default StackCard;
