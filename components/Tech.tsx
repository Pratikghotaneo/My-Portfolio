import Image from "next/image";
import TechImg from "@/public/tech-image.png";

const Tech = () => {
  return (
    <section
      id="technology"
      className="flex flex-col justify-center items-center"
    >
      <h1 className="text-center text-4xl font-normal text-neutral-300">
        Some of my Used <span className="text-yellow-800">Technology</span>
      </h1>
      <Image src={TechImg} alt="tech-image" />
    </section>
  );
};

export default Tech;
