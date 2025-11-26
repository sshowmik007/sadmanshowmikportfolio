import React from "react";
import { cn } from "@/lib/utils";
import { Testimonials } from "./Testimonials";
import WorkProcess from "./WorkProcess";
import FollowMe from "./FollowMe";
import WorkTogether from "./WorkTogether";

const ColumnThree = ({ className }) => {
  return (
    <div
      className={cn("grid grid-cols-1 md:grid-cols-2 gap-4 w-full", className)}
    >
      <div className="flex flex-col gap-4">
        <Testimonials />
        <FollowMe />
      </div>

      <div className="flex flex-col gap-4">
        <WorkProcess />
        <WorkTogether />
      </div>
    </div>
  );
};

export default ColumnThree;
