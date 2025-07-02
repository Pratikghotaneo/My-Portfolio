import Approach from "@/components/Apporach";
import Contact from "@/components/Contact";
import Experience from "@/components/Expreamce";
import FloatingButton from "@/components/FloatingButton";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { NavbarDemo } from "@/components/Navbar";
// import RecentProjects from "@/components/RecentProject";
import Tech from "@/components/Tech";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#000319] relative">
      <NavbarDemo />
      <Hero />
      <Grid />
      <Tech />
      <Experience />
      <Approach />
      {/* <RecentProjects /> */}
      <Contact />

      <FloatingButton />
    </div>
  );
};

export default page;
