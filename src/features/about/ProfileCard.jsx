import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";
import { TypingAnimation } from "@/components/ui/typing-animation";
import {
  MapPin,
  Globe,
  Briefcase,
  School,
  Building2,
  HomeIcon,
  Linkedin,
  ArrowUpRight,
  Clock,
  DownloadIcon,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import ProfilePic from "@/assets/Sadman Showmik Image.webp";
import Image from "next/image";
import TextType from "@/components/ui/shared/TextType";
import { Button } from "@/components/ui/button";
const profileData = {
  name: "Sadman Showmik",
  roles: ["Frontend Developer", "Software Engineer", "Designer"],
  badges: [
    {
      icon: <MapPin size={14} />,
      text: "Bangladesh",
    },
    {
      icon: <Globe size={14} />,
      text: "English & Bengali",
    },
    {
      icon: <Briefcase size={14} />,
      text: "Software Engineer",
    },
    {
      icon: <Clock size={14} />,
      text: "BST — UTC+6",
    },
    {
      icon: <School size={14} />,
      text: "Brac University",
    },
    {
      icon: <Building2 size={14} />,
      text: "Zerodai",
    },
    {
      icon: <HomeIcon size={14} />,
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
    <>
      <Card
        className={cn(
          "w-full rounded-xl bg-[#111] border border-neutral-800 px-2 py-4 gap-0 overflow-hidden relative",
          className
        )}
      >
        <div className="flex flex-row  gap-5 items-center  ">
          <Image
            loading="lazy"
            src={ProfilePic}
            alt="Profile"
            className="object-contain h-24 w-24 rounded-2xl "
          />

          <CardContent className="flex flex-col flex-1  px-0 py-0 ">
            <div className="flex flex-col flex-1  ">
              <div className="flex  items-start  w-full">
                <div className="flex flex-col  flex-1 ">
                  <div className="flex items-center flex-1 justify-between w-full ">
                    <StatusBadge />
                    <div className="flex items-center ml-3 ">
                      <p className="text-[clamp(0.75rem,1vw,0.9rem)] text-primary-foreground font-normal">
                        Resume
                      </p>
                      <Button
                        className="cursor-pointer font-semibold text-purple-500 rounded-lg "
                        variant="icon"
                      >
                        <DownloadIcon className="w-8 h-8" />
                      </Button>
                    </div>
                  </div>
                  <div className="  text-[clamp(1.4rem,2.5vw,2rem)] font-semibold text-neutral-200">
                    {profileData.name}
                  </div>
                </div>
                <div className="flex gap-2.5" />
              </div>

              <div className="flex flex-row gap-1 items-center leading-tight text-[clamp(0.85rem,1.4vw,1rem)] text-neutral-400">
                Im a
                <TextType
                  text={profileData.roles}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                  className="font-semibold text-purple-500 text-[clamp(0.9rem,1.5vw,1.1rem)]"
                />
              </div>
            </div>
          </CardContent>
        </div>
        <div className="flex overflow-hidden flex-col mt-4 w-full rounded-2xl bg-neutral-900 max-md:max-w-full">
          <div className="flex flex-wrap gap-1 w-full max-md:max-w-full p-2   rounded-2xl border border-solid border-zinc-900  ">
            {profileData.badges.map((badge, index) => (
              <InfoBadge key={index} icon={badge.icon} text={badge.text} />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4 w-full">
          {profileData.contacts.map((contact, index) => (
            <ContactButton
              key={index}
              icon={contact.icon}
              text={contact.text}
            />
          ))}
        </div>
      </Card>
    </>
  );
}

export default ProfileCard;

function StatusBadge() {
  return (
    <Badge className="flex overflow-hidden relative gap-2 self-start py-1.5 bg-zinc-900 hover:bg-zinc-900 rounded-[40px]text-[clamp(0.75rem,1vw,0.9rem)] font-medium text-[#999999] ring-1 ring-inset ring-gray-800">
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
    <Card className="flex relative p-0  justify-center  rounded-sm bg-zinc-900 border-0 ">
      <Badge className="flex items-center gap-2 self-start py-1.5 bg-zinc-900 hover:bg-zinc-900 rounded-[40px]text-[clamp(0.75rem,1vw,0.9rem)] font-medium text-zinc-300 ring-1 ring-inset ring-gray-700 rounded-sm">
        <span className="text-purple-600 text-[clamp(1rem,2vw,1.4rem)] ">
          {icon}
        </span>
        {text}
      </Badge>
    </Card>
  );
}

function ContactButton({ icon, text }) {
  return (
    <button className="group flex bg-neutral-900 gap-2 relative px-3 py-2 rounded-sm border items-center justify-between border-solid border-neutral-800 hover:border-purple-600">
      <div className="flex items-center gap-3">
        <span className="text-purple-600 text-[clamp(1rem,2vw,1.4rem)]  aspect-square">
          {icon}
        </span>
        <div className="self-end text-[clamp(0.9rem,1.6vw,1.2rem)] font-medium text-slate-400">
          {text}
        </div>
      </div>
      <div className="opacity-0 group-hover:opacity-100 group-hover:transition-opacity  group-hover:animate-once group-hover:animate-shine duration-300">
        <ArrowUpRight className="text-white/50" strokeWidth={1} />
      </div>
    </button>
  );
}
