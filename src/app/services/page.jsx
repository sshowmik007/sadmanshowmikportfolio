"use client";
import React from "react";

import ServiceSection from "@/features/about/ServiceSection";
import StatisticsSection from "@/features/about/StatisticsSection";
import ProfileCard from "@/features/about/ProfileCard";
import TechnologySection from "@/features/about/TechnologySection";
import { Testimonials } from "@/features/about/Testimonials";
import FollowMe from "@/features/about/FollowMe";
import WorkProcess from "@/features/about/WorkProcess";
import WorkTogether from "@/features/about/WorkTogether";
import ServiceStatisticsCard from "@/features/services/ServiceStatisticsCard";
import { AboutMeCard } from "@/features/services/AboutMeCard";

export default function ServicePage() {
  return (
    <div className="flex justify-center  items-center min-h-screen w-full bg-[#050505] p-5 ">
      <div className="grid max-w-[1920px] grid-cols-13   w-full gap-4 ">
        {/* Column One content */}
        <div className="col-span-13 lg:col-span-3 md:col-span-6 flex flex-col gap-4 max-h-[900px] h-full md:order-1 order-2">
          <ServiceStatisticsCard className="md:h-1/3" />
          <ServiceSection className="md:h-1/3" />
          <AboutMeCard className="md:h-1/3" />
        </div>

        {/* Column Two content */}
        <div className="col-span-13 lg:col-span-8 md:col-span-7 flex flex-col gap-4 max-h-[900px] h-full md:order-2 order-1">
          <StatisticsSection className="md:h-3/12 md:order-1 order-2" />
          <ProfileCard className="md:h-5/12 lg:order-2 order-1" />
          <TechnologySection className="md:h-4/12 lg:order-3 order-3" />
        </div>

        <div className="col-span-13 lg:col-span-2 md:col-span-13 flex lg:flex-col gap-4 max-h-[900px] h-full md:order-2 order-1">
          <WorkProcess className=" lg:h-7/12 " />
          <WorkTogether className="lg:h-5/12 " />
        </div>
      </div>
    </div>
  );
}
