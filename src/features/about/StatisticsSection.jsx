import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ShineBorder } from "@/components/ui/shine-border";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { FaCalendarAlt, FaProjectDiagram, FaSmileBeam } from "react-icons/fa";

import { DownloadIcon } from "lucide-react";

const statistics = [
  {
    value: "56",
    label: "Projects",
    icon: <FaProjectDiagram />,
    showPlus: true,
  },
  {
    value: "23",
    label: "Happy Clients",
    icon: <FaSmileBeam />,
    showPlus: true,
  },
  {
    value: "3",
    label: "Years Expertise",
    icon: <FaCalendarAlt />,
    showPlus: true,
  },
  {
    customComponent: (
      <div className="flex flex-row items-center justify-center space-y-2 text-center">
        <div className="text-3xl p-0 flex items-center font-semibold text-transparent bg-gradient-to-t from-black/90 to-[#999999] bg-clip-text">
          Resume
        </div>
        <button className="px-4 py-2 text-sm font-semibold text-purple-500 rounded-lg ">
          <DownloadIcon className="w-5 h-5" />
        </button>
      </div>
    ),
  },
];

const StatisticsSection = ({ className }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-2 lg:gap-2",
        className
      )}
    >
      {statistics.map((stat, index) => (
        <div
          key={index}
          className="relative min-w-full p-0 flex flex-col items-center justify-center overflow-hidden bg-[#101010] rounded-lg md:shadow-xl"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          borderWidth={1}
        >
          {stat.customComponent ? (
            // Render custom component if provided
            stat.customComponent
          ) : (
            <Card className="bg-transparent border-0 rounded-none p-0">
              <CardHeader className="flex flex-col items-center space-y-2 pt-2 pb-3 text-center px-0">
                <CardTitle className="text-6xl p-0 flex items-center font-semibold text-transparent bg-gradient-to-t from-black/90 to-[#999999] bg-clip-text">
                  {stat.value}
                  {stat.showPlus !== false && (
                    <span className="text-3xl text-purple-500">+</span>
                  )}
                </CardTitle>

                <Badge className="flex items-center gap-2 hover:bg-zinc-900 text-[#999999] bg-zinc-900 text-center rounded-sm">
                  <span className="text-xs text-purple-500">{stat.icon}</span>
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
