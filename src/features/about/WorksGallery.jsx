import * as React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { Briefcase } from "lucide-react";

import Marquee from "@/components/ui/marquee";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";

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

export function WorksGallery({ className }) {
  return (
    <Card
      className={cn(
        "w-full  rounded-xl bg-[#111] border border-neutral-800 py-4 gap-3 space-y-4 overflow-hidden relative",
        className
      )}
    >
      <CardHeader className="space-y-0 p-0 mb-0  text-center">
        <CardTitle className="flex justify-center items-center gap-2 text-[clamp(0.8rem,1.2vw,1rem)] text-neutral-300">
          <Briefcase className="h-[clamp(0.9rem,1.4vw,1.1rem)] w-[clamp(0.9rem,1.4vw,1.1rem)] text-purple-500 " />
          <p>Projects</p>
        </CardTitle>
        <CardDescription className="text-[clamp(1rem,1.8vw,1.4rem)]  font-semibold text-white">
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
        className="absolute left-1/2 -translate-x-1/2 bottom-4  ring-2  ring-zinc-600 border-0 gradientButton w-44 rounded-sm"
      />
    </Card>
  );
}

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
          <figcaption className="text-[clamp(0.8rem,1.2vw,1rem)] font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-[clamp(0.7rem,1vw,0.85rem)] font-medium dark:text-white/40">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-[clamp(0.8rem,1.2vw,1rem)]">
        {body}
      </blockquote>
    </figure>
  );
};
