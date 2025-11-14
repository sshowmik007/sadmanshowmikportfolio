import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import StackCard from "./StackCard";
import { WorksGallery } from "./WorksGallery";
import ServiceSection from "./ServiceSection";

const ColumnOne = () => {
  return (
    <div className="space-y-4 w-full">
      <StackCard className="w-full max-h-[33vh]" />
      <WorksGallery className="w-full max-h-[33vh]" />
      <ServiceSection className="w-full max-h-[33vh]" />
    </div>
  );
};

export default ColumnOne;
