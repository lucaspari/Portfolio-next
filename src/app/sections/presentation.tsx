"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
export default function Presentation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="md:flex md:items-center md:gap-4 md:h-screen">
      <div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="left md:w-1/2"
      >
        <img alt="me" className="w-[35em]" src={"/pixar_me.svg"} />
      </div>
      <div className="right md:w-1/2">
        <p
          style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="md:text-7xl py-4 my-4 text-4xl md:text-black md:text-wrap"
        >
          Hello I&apos;m Lucas Pari a FullStack Developer
        </p>
      </div>
    </section>
  );
}
