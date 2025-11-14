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

import { ShineBorder } from "@/components/ui/shine-border";
import { Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import GradientButton from "@/components/ui/shared/GradientButton";

import Marquee from "@/components/ui/marquee";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";

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
        "relative w-72 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-zinc-900 hover:bg-white-950/[.05]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-slate-200">{body}</blockquote>
    </figure>
  );
};
export function Testimonials({ className }) {
  return (
    <>
      <ShineBorder
        className={cn(
          "relative flex w-full flex-col items-center  justify-center overflow-hidden bg-[#101010] md:shadow-xl ",
          className
        )}
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        borderWidth={1}
      />
      <Card className="bg-transparent border-0 h-80  rounded-none px-0  ">
        <div className="flex items-center flex-col px-0   w-full ">
          <CardHeader className="flex item-center  mb-2 gap-0 self-center space-y-0 p-0  ">
            <CardTitle className="text-base flex  gap-2 items-center  text-neutral-400  ">
              <Briefcase className="h-4 w-4 text-purple-500 " />
              <p className="text-center">Testimonials</p>
            </CardTitle>
            <CardDescription className="self-center  text-xl font-semibold p-0 text-center text-neutral-200">
              Rave Reviews Showcase
            </CardDescription>
          </CardHeader>
          <Marquee pauseOnHover vertical className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          {/* <GradientButton text="View Works" className="absolute bottom-4" /> */}
        </div>
      </Card>
    </>
  );
}
