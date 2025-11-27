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

export default function ServicePage() {
  return (
    <div className="flex justify-center  items-center min-h-screen w-full bg-[#050505] p-5 ">
      <div className="grid max-w-[1920px] grid-cols-12   w-full gap-4 ">
        {/* Column One content */}
        <div className="col-span-12 lg:col-span-3 md:col-span-5 flex flex-col gap-4 max-h-[900px] h-full md:order-1 order-2">
          <StackCard className="md:h-1/3" />
          <WorksGallery className="md:h-1/3" />
          <ServiceSection className="md:h-1/3" />
        </div>

        {/* Column Two content */}
        <div className="col-span-12 lg:col-span-4 md:col-span-7 flex flex-col gap-4 max-h-[900px] h-full md:order-2 order-1">
          <StatisticsSection className="md:h-3/12 md:order-1 order-2" />
          <ProfileCard className="md:h-5/12 lg:order-2 order-1" />
          <TechnologySection className="md:h-4/12 lg:order-3 order-3" />
        </div>

        <div className="col-span-12 lg:col-span-5 grid grid-cols-1 md:grid-cols-2  gap-4 md:order-3 order-3">
          <div className="flex flex-col gap-4 max-h-[900px] h-full  ">
            <Testimonials className=" md:h-full h-[400px]" />
            <FollowMe className="md:h-full " />
          </div>
          <div className="flex flex-col gap-4 max-h-[900px] h-full ">
            <WorkProcess className=" md:h-7/12" />
            <WorkTogether className="md:h-5/12" />
          </div>
        </div>
      </div>
    </div>
  );
}
