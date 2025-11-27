import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProfilePic from "@/assets/Sadman Showmik Image.webp";

import InteractiveHoverButton from "@/components/ui/interactive-hover-button";

import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/sadmanshowmik",
    icon: <GitHubLogoIcon />,
  },
  {
    href: "https://instagram.com/yourprofile",
    icon: <InstagramLogoIcon />,
  },
  {
    href: "https://linkedin.com/in/yourprofile",
    icon: <LinkedInLogoIcon />,
  },
];
export function AboutMeCard({ className }) {
  return (
    <Card
      className={cn(
        "w-full rounded-xl bg-[#111] border border-neutral-800 py-4 gap-3 space-y-4 overflow-hidden relative",
        className
      )}
    >
      <CardHeader className="items-center! justify-items-center! text-center px-0 space-y-0 p-0 mb-0">
        <Image
          loading="lazy"
          src={ProfilePic}
          alt="Profile"
          className="h-24 w-24 rounded-2xl"
        />

        <div className="font-semibold text-neutral-200 text-[clamp(1rem,1.8vw,1.4rem)]">
          Sadman Showmik
        </div>
      </CardHeader>

      <CardContent className="flex flex-col flex-1 px-0 py-0">
        <div className="flex gap-3 items-center justify-center">
          {SOCIAL_LINKS.map((item, index) => (
            <SocialButton key={index} href={item.href} icon={item.icon} />
          ))}
        </div>
      </CardContent>

      <InteractiveHoverButton
        text="About me"
        link="/"
        className="absolute left-1/2 -translate-x-1/2 bottom-4 ring-2 ring-zinc-600 border-0 gradientButton w-44 rounded-sm"
      />
    </Card>
  );
}

export const SocialButton = ({ icon, href, className, ...props }) => {
  return (
    <Button
      asChild
      variant="ghost"
      size="icon-lg"
      className={cn(
        "rounded-md bg-zinc-900 border border-neutral-800",
        "flex items-center justify-center text-[#999999]",
        "hover:bg-zinc-800 hover:text-[#999999] transition-all",
        "[&_svg]:!size-6",
        className
      )}
      {...props}
    >
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {icon}
      </Link>
    </Button>
  );
};
