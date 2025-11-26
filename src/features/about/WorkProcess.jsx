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
    icon: <FaLightbulb className="h-4 w-4 text-yellow-400" />,
    name: "Requirement Analysis",
  },
  {
    icon: <FaSitemap className="h-4 w-4 text-purple-400" />,
    name: "Architecture & Planning",
  },
  {
    icon: <FaCode className="h-4 w-4 text-blue-400" />,
    name: "Development",
  },
  {
    icon: <FaMobileAlt className="h-4 w-4 text-green-400" />,
    name: "Responsive Design",
  },
  {
    icon: <FaRocket className="h-4 w-4 text-red-500" />,
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
        <CardTitle className="flex justify-center items-center gap-2 text-sm text-neutral-300">
          <FaCode className="h-4 w-4 text-purple-500" />
          <p>Work Process</p>
        </CardTitle>

        <CardDescription className="text-lg font-semibold text-white">
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
