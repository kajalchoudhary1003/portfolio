import React from "react";
import { Badge } from "./ui/badge";
import { Rampart_One } from "next/font/google";
import "./../app/globals.css";
import Image from "next/image";

const ram = Rampart_One({
  weight: "400",
  subsets: ["latin"],
});

const skills = [
  "JavaScript",
  "ReactJs",
  "NextJs",
  "NodeJs",
  "ExpressJs",
  "MongoDB",
  "MySQL",
  "HTML",
  "CSS",
  "Python",
  "Flask",
  "Swift",
  "Kotlin",
  "Android Studio",
  "Xcode",
  "Git",
  "GitHub",
  "VS Code",
  "C++",
  "Java",
  
];

const colors = ["bg-pink-600", "bg-violet-600", "bg-cyan-600"];

const Skills = () => {
  return (
    <div className="bg-primary py-8 ">
      <div className="flex flex-row justify-center gap-6 movingHeading">
        <Image src="/icons8-book-50.png" width={40} height={40}  />
        <Image src="/icons8-idea-50.png" width={40} height={40} />

        <h1
          className={`${ram.className} uppercase text-center xl:text-4xl md:text-2xl text-light`}
        >
          Skills
        </h1>

        <Image src="/icons8-learning-50.png" width={40} height={40} />
        <Image src="/icons8-growth-50.png" width={40} height={40} />
      </div>

      <div className="flex flex-wrap gap-4 justify-center px-12 py-6">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            className={`skill-badge ${
              colors[index % colors.length]
            } text-light text-lg`}
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default Skills;
