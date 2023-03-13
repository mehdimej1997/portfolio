"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect } from "react";

type Props = {};

export default function AboutSection({}: Props) {
  useEffect(() => {
    gsap.set(".image", {
      y: "+=200px",
    });
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".image", {
      stagger: 0.05,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".about",
        scrub: 1.5,
      },
      y: "-=400px",
      ease: "power3.InOut",
    });
  }, []);
  return (
    <div className="about container mx-auto relative">
      <div className="image absolute h-44 aspect-video left-7 -top-32">
        <Image src={"/img/three.png"} alt="" fill />
      </div>
      <div className="image absolute h-60 w-44 left-52 -bottom-20">
        <Image src={"/img/three.png"} alt="" fill />
      </div>
      <div className="image absolute h-56 aspect-square right-20 top-16">
        <Image src={"/img/three.png"} alt="" fill />
      </div>
      <div className="text-center">
        <p className="text-3xl">
          I have a passion for creating new user <br /> experiences that are
          impactful & <br /> meaningful.
        </p>
        <div className="my-5 mx-auto h-44 aspect-square bg-black text-white text-lg rounded-full flex items-center justify-center">
          <p>About Me</p>
        </div>
      </div>
    </div>
  );
}
