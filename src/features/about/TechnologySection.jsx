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
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiRedux,
  SiMobx,
  SiReacthookform,
  SiJest,
  SiGraphql,
  SiApollographql,
} from "react-icons/si";
import { Cloud, Code, GitBranch } from "lucide-react";
import { VscVscode } from "react-icons/vsc";
import { FaServicestack } from "react-icons/fa";

import { ShineBorder } from "@/components/ui/shine-border";
import Marquee from "@/components/ui/marquee";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";

const technologies = [
  // Core Frontend Technologies
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    description: "For semantic structure and markup",
  },
  { name: "CSS3", icon: <FaCss3Alt />, description: "For styling and layouts" },
  {
    name: "JavaScript (ES6+)",
    icon: <FaJsSquare />,
    description: "Core programming language for web development",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    description: "Strongly-typed JavaScript for better maintainability",
  },

  // Frameworks and Libraries
  {
    name: "React.js",
    icon: <FaReact />,
    description: "Core library for building user interfaces",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    description: "For server-side rendering and building full-stack React apps",
  },
  {
    name: "ShadCN",
    icon: <Cloud />,
    description: "For styled, accessible UI components",
  },
  {
    name: "TanStack Query",
    icon: <Code />,
    description: "For managing server-state and API calls",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    description: "Utility-first CSS framework for styling",
  },
  {
    name: "Framer Motion",
    icon: <SiFramer />,
    description: "For animations and interactivity",
  },

  // State Management
  {
    name: "Redux Toolkit",
    icon: <SiRedux />,
    description: "For centralized state management",
  },
  {
    name: "MobX",
    icon: <SiMobx />,
    description: "For simpler, reactive state management",
  },

  // Form Handling
  {
    name: "React Hook Form",
    icon: <SiReacthookform />,
    description: "For form validation and management",
  },
  {
    name: "Formik",
    icon: <SiApollographql />,
    description: "For building advanced forms with ease",
  },

  // Tools and Platforms
  { name: "Git", icon: <GitBranch />, description: "For version control" },
  {
    name: "GitHub",
    icon: <FaGithub />,
    description: "For hosting and collaborating on code repositories",
  },
  {
    name: "VS Code",
    icon: <VscVscode />,
    description: "Primary code editor",
  },

  // API Integration and Development
  {
    name: "REST APIs",
    icon: <Cloud />,
    description: "For handling backend communication",
  },
  {
    name: "GraphQL",
    icon: <SiGraphql />,
    description: "For more efficient data fetching and querying",
  },

  // Testing and Optimization
  {
    name: "Jest",
    icon: <SiJest />,
    description: "For unit testing and integration testing",
  },
];

const firstRow = technologies.slice(0, technologies.length / 2);
const secondRow = technologies.slice(technologies.length / 2);

const TechnologySection = ({ className }) => {
  return (
    <div
      className={cn(
        "relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#101010] md:shadow-xl",
        className
      )}
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      borderWidth={1}
    >
      <Card className="bg-transparent border-0 rounded-none px-0  ">
        <div className="flex flex-col px-0 py-4  w-full">
          <CardHeader className="flex item-center  gap-0 self-center space-y-0 p-0">
            <CardTitle className="text-base flex  gap-2 items-center  text-neutral-400  ">
              <FaServicestack className="h-4 w-4 text-purple-500 " />
              <p className="text-center">Technologies I used</p>
            </CardTitle>
            <CardDescription className="self-center pt-0 text-xl font-semibold  text-center text-neutral-200">
              Technologies Suite
            </CardDescription>
          </CardHeader>

          <Marquee pauseOnHover className="[--duration:30s] w-full">
            {firstRow.map((stack, index) => (
              <StackCardBadge key={index} icon={stack.icon} name={stack.name} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:30s] w-full">
            {secondRow.map((stack, index) => (
              <StackCardBadge key={index} icon={stack.icon} name={stack.name} />
            ))}
          </Marquee>
        </div>
      </Card>
    </div>
  );
};

export default TechnologySection;

const StackCardBadge = ({ icon, name }) => {
  return (
    <Card className="relative w-48  flex overflow-hidden flex-col flex-1 cursor-pointer rounded-sm bg-zinc-900 border-0">
      <CardContent className="flex gap-2 w-full relative px-3 py-1 rounded-sm border items-center border-solid border-neutral-800">
        <div className="flex justify-center items-center px-3 w-10 h-10 rounded-xl bg-zinc-800">
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
