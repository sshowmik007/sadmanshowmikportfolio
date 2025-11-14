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
    <Card className="w-full rounded-xl bg-[#111] border border-neutral-800 p-4 gap-3 space-y-4">
      <CardHeader className="space-y-0 p-0 mb-0  text-center">
        <CardTitle className="flex justify-center items-center gap-2 text-sm text-neutral-300">
          <FaCode className="h-4 w-4 text-purple-400" />
          <p>My Stacks</p>
        </CardTitle>
        <CardDescription className="text-lg  font-semibold text-white">
          Tech Arsenal
        </CardDescription>
      </CardHeader>

      <CardContent className="grid grid-cols-2 gap-3  p-0">
        {stacksData.map((stack, index) => (
          <StackCardBadge key={index} icon={stack.icon} name={stack.name} />
        ))}
      </CardContent>
    </Card>
  );
};

export default StackCard;

const StackCardBadge = ({ icon, name }) => {
  return (
    <div className="bg-zinc-900 border border-neutral-800 rounded-lg py-2 px-2.5 flex items-center gap-2 cursor-pointer hover:bg-zinc-800 transition">
      <div className=" rounded-lg bg-zinc-800 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-sm font-medium  text-primary-foreground">
        {name}
      </span>
    </div>
  );
};
