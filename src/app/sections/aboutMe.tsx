"use client";
import React, { useRef } from "react";
import Skills from "@/app/skills/skills";
import { useInView } from "framer-motion";
export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div id="about">
      <h1 className="text-5xl mb-2 pb-2 ">About Me 💻</h1>
      <div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="content "
      >
        <span className="text-black text-2xl ">
          I am a Web Developer with experience in diverse projects and
          technologies such as React, Java, NodeJS, and C#. Currently pursuing a
          degree in Computer Engineering at FACENS, I have skills in
          Testing/Deploy, Agile methodology, and tools such as Docker, Git, and
          Jest. I always seek to learn and update myself on new technologies and
          believe that I can contribute to the success of new projects.I am
          always seeking to learn and update myself on new technologies and
          methodologies, and I believe that I can contribute to the success of
          new projects with my passion and skills in web development.
        </span>
      </div>
      <div className="skills">
        <Skills />
      </div>
    </div>
  );
}
