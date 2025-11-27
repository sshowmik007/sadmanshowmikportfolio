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
import { RiCodepenFill } from "react-icons/ri";
import { Cloud, Code, GitBranch } from "lucide-react";
import { VscVscode } from "react-icons/vsc";

import Marquee from "@/components/ui/marquee";

import { StackCardBadge } from "@/components/ui/shared/StackCardBadge";

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
    <Card
      className={cn(
        "w-full rounded-xl  bg-[#111] border border-neutral-800 py-4 gap-0 overflow-hidden relative",
        className
      )}
    >
      <CardHeader className="space-y-0 p-0 mb-4  text-center">
        <CardTitle className="flex justify-center items-center gap-2 text-[clamp(0.8rem,1.2vw,1rem)] text-neutral-300">
          <RiCodepenFill className="h-[clamp(0.9rem,1.4vw,1.1rem)] w-[clamp(0.9rem,1.4vw,1.1rem)] text-purple-500 " />
          <p>Technologies I used</p>
        </CardTitle>
        <CardDescription className="text-[clamp(1rem,1.8vw,1.4rem)]  font-semibold text-white">
          Technologies Suite
        </CardDescription>
      </CardHeader>

      <Marquee pauseOnHover className="[--duration:30s] p-1 ">
        {firstRow.map((stack, index) => (
          <StackCardBadge key={index} icon={stack.icon} name={stack.name} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:30s] p-1 ">
        {secondRow.map((stack, index) => (
          <StackCardBadge key={index} icon={stack.icon} name={stack.name} />
        ))}
      </Marquee>
    </Card>
  );
};

export default TechnologySection;
