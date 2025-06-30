import Approach from "@/components/Apporach";
import Experience from "@/components/Expreamce";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Tech from "@/components/Tech";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#000319]">
      <Hero />
      <Grid />
      <Tech />
      <Experience />
      <Approach />
    </div>
  );
};

export default page;
