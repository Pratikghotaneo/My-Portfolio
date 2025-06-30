import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps {
  name: string;
  type: "bordermagic" | "liftupborders" | "outline";
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

const Buttons = ({ name, type, onClick, className, icon }: ButtonProps) => {
  const buttonType = [
    {
      name: "BorderMagic",
      component: (
        <button
          onClick={onClick}
          className={cn(
            `relative inline-flex h-12 overflow-hidden  p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50`,
            className
          )}
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span
            className={cn(
              `inline-flex h-full w-full cursor-pointer items-center justify-center  bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl`
            )}
          >
            {icon}
            {name}
          </span>
        </button>
      ),
    },
    {
      name: "LiftUpBorders",
      component: (
        <button onClick={onClick} className="p-[3px] relative">
          <div
            className={cn(
              `absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg`,
              className
            )}
          />
          <div className="flex gap-2 px-4 md:px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            {icon}
            {name}
          </div>
        </button>
      ),
    },
    {
      name: "outline",
      component: (
        <button className="flex gap-2 px-3 md:px-6  py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
          {icon}
          {name}
        </button>
      ),
    },
  ];

  const selectedButton = buttonType.find(
    (button) => button.name.toUpperCase() === type.toUpperCase()
  );

  return selectedButton ? selectedButton.component : null;
};

export default Buttons;
