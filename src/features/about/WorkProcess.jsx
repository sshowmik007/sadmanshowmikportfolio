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
} from "react-icons/fa";
import { ShineBorder } from "@/components/ui/shine-border";

import { cn } from "@/lib/utils";
const workflowData = [
  {
    icon: <FaLightbulb className="h-4 w-4 text-yellow-400" />,
    name: "Requirement Analysis",
    description: "Understanding client needs and defining the project scope.",
  },
  {
    icon: <FaSitemap className="h-4 w-4 text-purple-400" />,
    name: "Architecture & Planning",
    description:
      "Designing the project structure, choosing the right tools, and planning the development phases.",
  },
  {
    icon: <FaCode className="h-4 w-4 text-blue-400" />,
    name: "Development",
    description:
      "Building reusable components, integrating APIs, and managing state effectively using tools like React, Redux, or MobX.",
  },
  {
    icon: <FaMobileAlt className="h-4 w-4 text-green-400" />,
    name: "Responsive Design",
    description:
      "Ensuring the application is responsive and mobile-friendly using Tailwind CSS or styled-components.",
  },
  {
    icon: <FaRocket className="h-4 w-4 text-red-500" />,
    name: "Deployment & Optimization",
    description:
      "Deploying the application using platforms like Vercel or Netlify, optimizing performance, and monitoring post-deployment.",
  },
];
const WorkProcess = ({ className }) => {
  return (
    <div
      className={cn(
        "relative flex w-full flex-col min-w-2/3 items-center justify-center overflow-hidden bg-[#101010]  md:shadow-xl",
        className
      )}
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      borderWidth={1}
    >
      <Card className="bg-transparent border-0 rounded-none px-0 w-full ">
        <div className="flex flex-col px-0 py-4  w-full">
          <CardHeader className="flex item-center  gap-0 self-center space-y-0 p-0">
            <CardTitle className="text-base flex  gap-2 items-center  text-neutral-400  ">
              <FaCode className="h-4 w-4 text-purple-500 " />
              <p className="text-center">Work Process</p>
            </CardTitle>
            <CardDescription className="self-center pt-0 text-xl font-semibold  text-center text-neutral-200">
              Workflow Highlights
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

export default WorkProcess;

const StackCardBadge = ({ icon, name }) => {
  return (
    <Card className="relative  flex overflow-hidden flex-col flex-1 cursor-pointer rounded-sm bg-zinc-900 border-0">
      <CardContent className="flex gap-2 relative px-3 py-1 rounded-sm border items-center border-solid border-neutral-800">
        <div className="flex justify-center items-center px-3 w-9 h-9 rounded-xl bg-zinc-800">
          <div className="flex justify-center items-center text-[#999999]">
            {icon}
          </div>
        </div>
        <div className="grow shrink my-auto text-sm font-semibold text-stone-300">
          {name}
        </div>
      </CardContent>
    </Card>
  );
};
