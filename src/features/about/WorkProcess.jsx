import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  FaLightbulb,
  FaSitemap,
  FaCode,
  FaMobileAlt,
  FaRocket,
} from "react-icons/fa";

import { cn } from "@/lib/utils";
import { StackCardBadge } from "@/components/ui/shared/StackCardBadge";

const workflowData = [
  {
    icon: (
      <FaLightbulb className="h-[clamp(0.9rem,1.4vw,1.1rem)] w-[clamp(0.9rem,1.4vw,1.1rem)] text-yellow-400" />
    ),
    name: "Requirement Analysis",
  },
  {
    icon: (
      <FaSitemap className="h-[clamp(0.9rem,1.4vw,1.1rem)] w-[clamp(0.9rem,1.4vw,1.1rem)] text-purple-400" />
    ),
    name: "Architecture & Planning",
  },
  {
    icon: (
      <FaCode className="h-[clamp(0.9rem,1.4vw,1.1rem)] w-[clamp(0.9rem,1.4vw,1.1rem)] text-blue-400" />
    ),
    name: "Development",
  },
  {
    icon: (
      <FaMobileAlt className="h-[clamp(0.9rem,1.4vw,1.1rem)] w-[clamp(0.9rem,1.4vw,1.1rem)] text-green-400" />
    ),
    name: "Responsive Design",
  },
  {
    icon: (
      <FaRocket className="h-[clamp(0.9rem,1.4vw,1.1rem)] w-[clamp(0.9rem,1.4vw,1.1rem)] text-red-500" />
    ),
    name: "Deployment & Optimization",
  },
];

const WorkProcess = ({ className }) => {
  return (
    <Card
      className={cn(
        "w-full rounded-xl bg-[#111] border  border-neutral-800 py-4 gap-0 overflow-hidden relative ",
        className
      )}
    >
      <CardHeader className="space-y-0 p-0 mb-4 text-center">
        <CardTitle className="flex justify-center items-center gap-2 text-[clamp(0.8rem,1.2vw,1rem)] text-neutral-300">
          <FaCode className="h-[clamp(0.9rem,1.4vw,1.1rem)] w-[clamp(0.9rem,1.4vw,1.1rem)] text-purple-500" />
          <p>Work Process</p>
        </CardTitle>

        <CardDescription className="text-[clamp(1rem,1.8vw,1.4rem)]  font-semibold text-white">
          Workflow Highlights
        </CardDescription>
      </CardHeader>

      <div className="grid gap-2 px-3">
        {workflowData.map((item, index) => (
          <StackCardBadge key={index} icon={item.icon} name={item.name} />
        ))}
      </div>
    </Card>
  );
};

export default WorkProcess;
