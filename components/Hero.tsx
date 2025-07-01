"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";
import { TypewriterEffectSmooth } from "./ui/TypeEffect";
import { FlipWords } from "./ui/FlipWorlds";
import Image from "next/image";
import UserImg from "../public/user-img.png";
import Buttons from "./ui/Buttons";
import { Download } from "lucide-react";
import { Link } from "react-scroll";
import NextLink from "next/link";

export default function Hero() {
  const words = [
    {
      text: "Hii! I'm",
      className: "text-neutral-300",
    },
    {
      text: "Pratik S. Ghotane 🙋‍♂️",
      className: "text-blue-400",
    },
  ];

  const platform = ["Web", "Application"];
  return (
    <div className="relative flex h-[40rem] md:h-[100vh] w-full overflow-hidden bg-black/[0.96] antialiased md:items-center md:justify-center">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <Spotlight
        className="bottom-20 right-20 md:-top-20 md:left-60"
        fill="blue"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-3 pt-20 md:pt-0">
        <div className="flex justify-center">
          <div className="overflow-hidden rounded-full w-[180px] h-[180px]">
            <Image
              src={UserImg}
              alt="user image"
              width={180}
              height={180}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <TypewriterEffectSmooth
            words={words}
            //  className="text-center"
          />
        </div>
        <h1 className="relative text-center text-3xl font-bold bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent bg-opacity-50 transition-all duration-500 ease-in-out md:text-6xl">
          Frontend&nbsp;
          <span className="inline-block min-w-[130px] transition-all duration-300 ease-in-out">
            <FlipWords words={platform} className="text-transparent" />
          </span>
          Developer.
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-center text-base font-normal text-neutral-300">
          A passionate frontend and mobile app developer from India with 5+
          years of experience, including 3+ years specializing in full-stack
          development.
        </p>

        <div className="flex justify-center gap-6 mt-5">
          <Link to="contact" smooth={true} duration={500}>
            <Buttons name="Contact me" type="outline" />
          </Link>

          <NextLink
            href="/PSG-resume.pdf"
            download="PSG-resume.pdf"
            rel="noopener noreferrer"
          >
            <Buttons
              name="Download resume"
              type="liftupborders"
              icon={<Download />}
            />
          </NextLink>
        </div>
      </div>
    </div>
  );
}
