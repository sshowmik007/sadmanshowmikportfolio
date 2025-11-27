import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { FaRegSmileBeam } from "react-icons/fa";
import { PiShootingStarFill, PiHandshakeFill } from "react-icons/pi";
import { RiCustomerService2Fill } from "react-icons/ri";
const statistics = [
  {
    value: "99",
    label: "Satisfaction",
    icon: <PiShootingStarFill />,
    suffix: "%",
  },
  {
    value: "08",
    label: "Partnerships",
    icon: <PiHandshakeFill />,
    suffix: "+",
  },
  {
    value: "12",
    label: "Services Suite",
    icon: <RiCustomerService2Fill />,
    suffix: "+",
  },
  {
    value: "14",
    label: "Accolades",
    icon: <FaRegSmileBeam />,
    suffix: "+",
  },
];

const ServiceStatisticsCard = ({ className }) => {
  return (
    <div
      className={cn(
        "grid gap-2 grid-cols-2 lg:grid-cols-2 lg:gap-2 w-full ",
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
              <CardHeader className="flex flex-col items-center    text-center ">
                <CardTitle className=" p-0 flex items-center font-semibold text-transparent bg-linear-to-t from-black/10 to-[#999999] bg-clip-text">
                  <p className="text-[clamp(4rem,4vw,4rem)] ">{stat.value}</p>
                  {stat.suffix && (
                    <span className="text-[clamp(1rem,2vw,1.75rem)] text-purple-500 ml-1">
                      {stat.suffix}
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

export default ServiceStatisticsCard;
