"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
export default function Skills() {
  const skills = [
    { src: "/js.svg", alt: "js" },
    { src: "/next.svg", alt: "next" },
    { src: "/react.svg", alt: "react" },
    { src: "/python.svg", alt: "python" },
  ];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.0s",
      }}
      className="py-2 my-2 flex flex-wrap justify-between"
    >
      {skills.map((skill) => (
        <Image
          src={skill.src}
          width={140}
          height={140}
          alt={skill.alt}
          key={skill.alt}
        />
      ))}
    </div>
  );
}
