import { cn } from "@/lib/utils";
import React from "react";
import { Link } from "next/link";

const GradientButton = ({ text, link, className, ...props }) => {
  const buttonContent = (
    <span className="h-6 font-manrope font-semibold text-[16px] leading-6 flex items-center text-[#2D2D2D]">
      {text || "Default Text"}
    </span>
  );

  if (link) {
    return (
      <Link
        href={link}
        className={clsx(
          "flex flex-row justify-center items-center  py-3 w-[150px] h-12 bg-linear-to-r from-[#B3A4FD] via-[#A290FC] to-[#B3A4FD] rounded-sm",
          className
        )}
        {...props}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      className={cn(
        "flex flex-row justify-center items-center  py-3 w-[150px] h-12 bg-linear-to-r from-[#B3A4FD] via-[#A290FC] to-[#B3A4FD] rounded-sm",
        className
      )}
      {...props}
    >
      {buttonContent}
    </button>
  );
};

export default GradientButton;
