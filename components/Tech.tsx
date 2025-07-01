"use client";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  Atom,
  Braces,
  Database,
  DatabaseIcon,
  FileCode,
  Globe,
  LayoutGrid,
  Network,
  Server,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { FaAngular } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
// import { Element } from "react-scroll";
const skills = [
  { name: "React", icon: Atom },
  { name: "Next.js", icon: Globe },
  { name: "Angular", icon: FaAngular },
  { name: "TypeScript", icon: Braces },
  { name: "Tailwind CSS", icon: LayoutGrid },
  { name: "JavaScript", icon: Zap },
  { name: "HTML5", icon: FileCode },
  { name: "CSS3", icon: FileCode },
  { name: "Node.js", icon: Server },
  { name: "Express.js", icon: Server },
  { name: "SQL", icon: DatabaseIcon },
  { name: "MongoDB", icon: Database },
  { name: "GraphQL", icon: Network },
  { name: "REST API", icon: Globe },
  { name: "Prisma", icon: ShieldCheck },
  { name: "GitHub", icon: BsGithub },
];

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: false,
    margin: "0px 0px -180px 0px",
  });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen bg-[#0c0c1d] text-white py-20 px-4"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Technologies Used
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <Tilt
                  glareEnable
                  glareMaxOpacity={0.1}
                  scale={1.03}
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  className="bg-[#1a1a2e] p-6 rounded-xl shadow-md border border-[#2a2a40] hover:shadow-purple-500/10 transition duration-300"
                >
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <Icon size={32} className="text-purple-400" />
                    <span className="text-sm font-medium tracking-wide text-white">
                      {skill.name}
                    </span>
                  </div>
                </Tilt>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
