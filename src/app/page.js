import React from "react";

import ColumnOne from "@/features/about/ColumnOne";
import ColumnTwo from "@/features/about/ColumnTwo";
import { ColumnThree } from "@/features/about/ColumnThree";

export default function Portfolio() {
  return (
    <div className="flex overflow-hidden flex-col min-h-screen  justify-center items-center  bg-[#050505] ">
      <div className="overflow-hidden  p-5 w-full max-w-full  lg:max-w-[1700px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Column  1 */}
          <div className="md:col-span-3 space-y-6 lg:order-1 order-2 ">
            <ColumnOne />
          </div>
          {/* Column  2 */}

          {/* <div className="md:col-span-4 space-y-6 lg:order-2 order-1">
            <ColumnTwo />
          </div> */}
          {/* Column  3 */}

          {/* <div className="md:col-span-5 space-y-6   text-white lg:order-3 order-3">
            <ColumnThree />
          </div> */}
        </div>
      </div>
    </div>
  );
}
