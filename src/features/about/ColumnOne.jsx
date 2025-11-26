import React from "react";

import StackCard from "./StackCard";
import { WorksGallery } from "./WorksGallery";
import ServiceSection from "./ServiceSection";

const ColumnOne = () => {
  return (
    <div className="space-y-4 w-full">
      <StackCard className="w-full " />
      <WorksGallery className="w-full " />
      <ServiceSection className="w-full " />
    </div>
  );
};

export default ColumnOne;
