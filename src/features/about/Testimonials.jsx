import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Briefcase } from "lucide-react";
import Marquee from "@/components/ui/marquee";
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

export function Testimonials({ className }) {
  return (
    <Card
      className={cn(
        "w-full  rounded-xl bg-[#111] border border-neutral-800 py-4 gap-0 overflow-hidden relative ",
        className
      )}
    >
      <CardHeader className="space-y-0 p-0 mb-4  text-center">
        <CardTitle className="flex justify-center items-center gap-2 text-sm text-neutral-300">
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
    </Card>
  );
}

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative min-w-72 cursor-pointer overflow-hidden  rounded-xl  p-4 border-gray-950/10 bg-zinc-900 hover:bg-white-950/[.05]"
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
