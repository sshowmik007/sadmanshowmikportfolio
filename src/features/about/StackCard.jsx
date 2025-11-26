import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { FaCode, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiMobx, SiShadcnui } from "react-icons/si";
import { StackCardBadge } from "@/components/ui/shared/StackCardBadge";
import { cn } from "@/lib/utils";

const stacksData = [
  {
    icon: <FaReact className="h-6 w-6 text-blue-500" />,
    name: "React JS",
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
        <CardTitle className="flex justify-center items-center gap-2 text-sm text-neutral-300">
          <FaCode className="h-4 w-4 text-purple-400" />
          <p>My Stacks</p>
        </CardTitle>
        <CardDescription className="text-lg  font-semibold text-white">
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
