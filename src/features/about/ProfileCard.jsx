import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { cn } from "@/lib/utils";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import { ShineBorder } from "@/components/ui/shine-border";
import { Badge } from "@/components/ui/badge";
import { TypingAnimation } from "@/components/ui/typing-animation";
import {
  MapPin,
  Globe,
  Briefcase,
  School,
  Smile,
  Building2,
  HomeIcon,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import { FaGithub, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { SiFiverr, SiGmail } from "react-icons/si";

import ProfilePic from "@/assets/Sadman Showmik Image.webp";
const profileData = {
  name: "Sadman Showmik",
  roles: ["Frontend Developer", "Software Engineer", "Designer"],
  badges: [
    {
      icon: <MapPin size={14} />, // Lucide icon for location
      text: "Bangladesh",
    },
    {
      icon: <Globe size={14} />, // Lucide icon for languages
      text: "English & Bengali",
    },
    {
      icon: <Briefcase size={14} />, // Lucide icon for profession
      text: "Software Engineer",
    },
    {
      icon: <School size={14} />, // Lucide icon for education
      text: "Brac University",
    },
    {
      icon: <Building2 size={14} />, // Lucide icon for personality
      text: "Zerodai",
    },
    {
      icon: <HomeIcon size={14} />, // Lucide icon for personality
      text: "Work From Home",
    },
  ],
  contacts: [
    {
      icon: <Linkedin />,
      text: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      text: "Github",
    },
  ],
};

function ProfileCard({ className }) {
  return (
    <div
      className={cn(
        "relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#101010] md:shadow-xl",
        className
      )}
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      borderWidth={1}
    >
      <Card className="bg-transparent border-0 rounded-none px-0  w-full flex ">
        <div className="flex flex-row  gap-5 items-center  ">
          <img
            loading="lazy"
            src={ProfilePic}
            alt="Profile"
            className="object-contain grow shrink-0 max-w-full rounded-2xl aspect-[0.93]  max-md:mt-5 w-[100px] h-[100px]"
          />

          <CardContent className="flex flex-col  px-0    py-0">
            <div className="flex flex-col w-full ">
              <div className="flex  justify-between items-start w-full">
                <div className="flex flex-col ">
                  <StatusBadge />
                  <div className=" text-3xl font-semibold text-neutral-200">
                    {profileData.name}
                  </div>
                </div>
                <div className="flex gap-2.5" />
              </div>
              <div className="flex gap-2 self-start mt-2 text-lg">
                <div className="flex flex-row gap-1 items-center leading-tight text-neutral-400">
                  Im a{" "}
                  <TypingAnimation
                    className="text-violet-400 text-lg p-0 m-0"
                    texts={profileData.roles} // Pass roles array
                    duration={100}
                    delay={1000}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
      <div className="flex overflow-hidden flex-col mt-4 w-full rounded-2xl bg-neutral-900 max-md:max-w-full">
        <div className="flex flex-col py-4 pr-6 pl-2.5 w-full rounded-2xl border border-solid border-zinc-900 max-md:pr-5 max-md:max-w-full">
          <div className="flex flex-wrap gap-2 w-full max-md:max-w-full">
            {profileData.badges.map((badge, index) => (
              <InfoBadge key={index} icon={badge.icon} text={badge.text} />
            ))}
          </div>
        </div>
      </div>
      <div className="grid  grid-cols-2 gap-2 mt-4  w-full">
        {profileData.contacts.map((contact, index) => (
          <ContactButton key={index} icon={contact.icon} text={contact.text} />
        ))}
      </div>
    </div>
  );
}

export default ProfileCard;

function StatusBadge() {
  return (
    <Badge className="flex overflow-hidden relative gap-2 self-start py-1.5 bg-zinc-900 hover:bg-zinc-900 rounded-[40px] text-xs font-medium text-[#999999] ring-1 ring-inset ring-gray-800">
      <svg
        viewBox="0 0 6 6"
        aria-hidden="true"
        className="size-2 fill-green-400 animate-pulse"
      >
        <circle r={3} cx={3} cy={3} />
      </svg>
      Available To Work
    </Badge>
  );
}

function InfoBadge({ icon, text }) {
  return (
    <Card className="flex relative gap-1 justify-center  rounded-sm bg-zinc-900 border-0 ]">
      <Badge className="flex items-center gap-2 self-start py-1.5 bg-zinc-900 hover:bg-zinc-900 rounded-[40px] text-xs font-medium text-[#999999] ring-1 ring-inset ring-gray-800">
        <span className="text-purple-600">{icon}</span>

        {text}
      </Badge>
    </Card>
  );
}

function ContactButton({ icon, text }) {
  return (
    <button className="group flex bg-neutral-900 gap-2 relative px-3 py-2 rounded-sm border items-center justify-between border-solid border-neutral-800 hover:border-purple-600">
      <div className="flex items-center gap-3">
        <span className="text-purple-600 aspect-square">{icon}</span>
        <div className="self-end text-lg font-medium text-slate-400">
          {text}
        </div>
      </div>
      <div className="opacity-0 group-hover:opacity-100 group-hover:transition-opacity  group-hover:animate-once group-hover:animate-shine duration-300">
        <ArrowUpRight className="text-white/50" strokeWidth={1} />
      </div>
    </button>
  );
}
