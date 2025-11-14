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

import { Briefcase } from "lucide-react";

import Marquee from "@/components/ui/marquee";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import GradientButton from "@/components/ui/shared/GradientButton";
import Image from "next/image";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-48 h-28 cursor-pointer overflow-hidden rounded-xl border p-2 hover:shadow-lg transition-all duration-300  ",
        "border-gray-950/10 bg-white hover:bg-white-950/[.05]",
        "dark:border-gray-50/10 dark:bg-gray-50/10 dark:hover:bg-gray-50/15"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};
export function WorksGallery({ className }) {
  return (
    <Card className="w-full rounded-xl bg-[#111] border border-neutral-800 py-4 gap-3 space-y-4 overflow-hidden relative">
      <CardHeader className="space-y-0 p-0 mb-0  text-center">
        <CardTitle className="flex justify-center items-center gap-2 text-sm text-neutral-300">
          <Briefcase className="h-4 w-4 text-purple-500 " />
          <p>Projects</p>
        </CardTitle>
        <CardDescription className="text-lg  font-semibold text-white">
          Works Gallery
        </CardDescription>
      </CardHeader>
      <Marquee pauseOnHover className="[--duration:20s]  ">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      {/* <GradientButton text="View Works" className="absolute bottom-4" /> */}
      <InteractiveHoverButton
        text="View Works"
        link="/works"
        className="absolute left-1/2 -translate-x-1/2 bottom-4 text-primary-foreground bg-linear-to-r from-[#B3A4FD] via-[#A290FC] to-[#B3A4FD] w-44 rounded-sm"
      />
    </Card>
  );
}
