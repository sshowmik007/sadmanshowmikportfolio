"use client";
import React from "react";

import StackCard from "@/features/about/StackCard";
import { WorksGallery } from "@/features/about/WorksGallery";
import ServiceSection from "@/features/about/ServiceSection";
import StatisticsSection from "@/features/about/StatisticsSection";
import ProfileCard from "@/features/about/ProfileCard";
import TechnologySection from "@/features/about/TechnologySection";
import { Testimonials } from "@/features/about/Testimonials";
import FollowMe from "@/features/about/FollowMe";
import WorkProcess from "@/features/about/WorkProcess";
import WorkTogether from "@/features/about/WorkTogether";

export default function Portfolio() {
  return (
    <div className="flex justify-center  items-center min-h-screen w-full bg-[#050505] p-5 ">
      <div className="grid max-w-[1920px] grid-cols-12   w-full gap-4">
        {/* Column One content */}
        <div className="col-span-12 md:col-span-3 flex flex-col gap-4 max-h-[800px]">
          <StackCard className="lg:h-1/3" />
          <WorksGallery className="lg:h-1/3" />
          <ServiceSection className="lg:h-1/3" />
        </div>

        {/* Column Two content */}
        <div className="col-span-12 md:col-span-4 flex flex-col gap-4 max-h-[800px]">
          <StatisticsSection className="lg:h-3/12" />
          <ProfileCard className="lg:h-5/12" />
          <TechnologySection className="lg:h-4/12" />
        </div>

        <div className="col-span-12 md:col-span-5 grid grid-cols-1 md:grid-cols-2  gap-4">
          <div className="flex flex-col gap-4 max-h-[800px] ">
            <Testimonials className=" h-full " />
            <FollowMe className="h-full " />
          </div>
          <div className="flex flex-col gap-4 max-h-[800px]">
            <WorkProcess className=" lg:h-7/12" />
            <WorkTogether className="lg:h-5/12" />
          </div>
        </div>
      </div>
    </div>
  );
}
