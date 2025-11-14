import DotPattern from "@/components/ui/dot-pattern";
import ShineBorder from "@/components/ui/shine-border";
import { cn } from "@/lib/utils";
import React from "react";
import { Testimonials } from "./Testimonials";
import WorkProcess from "./WorkProcess";
import FollowMe from "./FollowMe";
import WorkTogether from "./WorkTogether";

export const ColumnThree = ({ className }) => {
  return (
    <div className="space-y-6 ">
      <div className="grid md:grid-cols-9 gap-4 h-[380px] ">
        <div className=" md:col-span-5 flex">
          <Testimonials />
        </div>
        <div className=" md:col-span-4 flex">
          <WorkProcess />
        </div>
      </div>
      <div className="md:grid md:grid-cols-9 gap-4 h-[380px]">
        <div className=" md:col-span-4 flex">
          <FollowMe />
        </div>
        <div className=" md:col-span-5 flex mt-2 lg:mt-0">
          <WorkTogether />
        </div>
      </div>
    </div>
  );
};
