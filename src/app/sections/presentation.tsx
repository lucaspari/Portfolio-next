"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
export default function Presentation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="flex items-center gap-4 h-screen">
      <div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="left w-1/2"
      >
        <Image alt="me" src={"/pixar_me.svg"} width={519} height={519} />
      </div>
      <div className="right w-1/2">
        <p
          style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className="text-8xl text-black text-wrap"
        >
          Hello I&apos;m Lucas Pari a FullStack Developer
        </p>
      </div>
    </section>
  );
}
