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
    </div>
  );
};

export default page;
