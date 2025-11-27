import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { FaCalendarAlt, FaProjectDiagram, FaSmileBeam } from "react-icons/fa";

const statistics = [
  {
    value: "56",
    label: "Projects",
    icon: <FaProjectDiagram />,
    showPlus: true,
  },

  {
    value: "3",
    label: "Years Expertise",
    icon: <FaCalendarAlt />,
    showPlus: true,
  },
  {
    value: "23",
    label: "Happy Clients",
    icon: <FaSmileBeam />,
    showPlus: true,
  },
];

const StatisticsSection = ({ className }) => {
  return (
    <div
      className={cn(
        "grid gap-2 grid-cols-3 lg:grid-cols-3 lg:gap-2 w-full ",
        className
      )}
    >
      {statistics.map((stat, index) => (
        <div
          key={index}
          className="relative min-w-full  border border-neutral-800 p-0 flex flex-col items-center justify-center overflow-hidden bg-[#101010] rounded-lg md:shadow-xl"
        >
          {stat.customComponent ? (
            stat.customComponent
          ) : (
            <Card className="bg-transparent border-0 rounded-none p-0 ">
              <CardHeader className="flex flex-col items-center space-y-2 pt-2 pb-3 text-center px-0">
                <CardTitle className="text-[clamp(4rem,4vw,4rem)] p-0 flex items-center font-semibold text-transparent bg-linear-to-t from-black/10 to-[#999999] bg-clip-text">
                  {stat.value}
                  {stat.showPlus !== false && (
                    <span className="text-[clamp(1rem,2vw,1.75rem)] text-purple-500">
                      +
                    </span>
                  )}
                </CardTitle>

                <Badge className="flex items-center gap-2 hover:bg-zinc-900 text-[#999999] bg-zinc-900 text-center rounded-sm">
                  <span className="text-[clamp(0.65rem,1vw,0.8rem)] text-purple-500">
                    {stat.icon}
                  </span>
                  {stat.label}
                </Badge>
              </CardHeader>
            </Card>
          )}
        </div>
      ))}
    </div>
  );
};

export default StatisticsSection;
