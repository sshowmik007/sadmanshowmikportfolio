import React from "react";

import StatisticsSection from "./StatisticsSection";
import ProfileCard from "./ProfileCard";
import TechnologySection from "./TechnologySection";
import { cn } from "@/lib/utils";

const ColumnTwo = ({ className }) => {
  return (
    <div className={cn("space-y-4 w-full", className)}>
      <StatisticsSection className="lg:order-1 order-2 mt-2 lg:mt-0 w-full h-1/6" />
      <ProfileCard className="lg:order-2 order-1 w-full h-3/6" />
      <TechnologySection className="lg:order-3 order-3 w-full h-2/6" />
    </div>
  );
};

export default ColumnTwo;
