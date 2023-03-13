"use client";
import gsap from "gsap";
import React, { useEffect } from "react";
import IconBounce from "./IconBounce";

type Props = {};

export const Header = (props: Props) => {
  useEffect(() => {
    gsap.from("#github", {
      y: 0,
    });
    const t1 = gsap.timeline({
      repeat: -1,
      defaults: {
        ease: "none",
        duration: 1.5,
      },
    });
    t1.to("#github", { y: -20 });
    t1.to("#github", { y: 0 });

    gsap.from("#gmail", {
      y: 0,
    });
    const t2 = gsap.timeline({
      repeat: -1,
      defaults: {
        ease: "none",
        duration: 1.45,
      },
    });
    t2.to("#gmail", { y: -20 });
    t2.to("#gmail", { y: 0 });

    gsap.from("#linkedIn", {
      y: 0,
    });
    const t3 = gsap.timeline({
      repeat: -1,
      defaults: {
        ease: "none",
        duration: 1.4,
      },
    });
    t3.to("#linkedIn", { y: -20 });
    t3.to("#linkedIn", { y: 0 });
  }, []);
  return (
    <header className="container mx-auto text-xl  min-h-[80vh] items-center flex">
      <div className="ml-52 leading-snug w-full">
        <IconBounce id="github" imageUrl="/img/github.png" />
        <IconBounce
          id="gmail"
          imageUrl="/img/gmail.png"
          backdropColor="red"
          style={{ top: "48px", left: "75%" }}
        />
        <IconBounce
          id="linkedIn"
          imageUrl="/img/linkedin.png"
          backdropColor="blue"
          style={{ top: "40vh", left: "5%" }}
        />
        <h1> Mejjad El Mehdi</h1>
        <h1 className="text-[112px]">
          <span className="-ml-1">Full-Stack</span>
          <span className="block ml-16">WEB developer</span>
        </h1>
      </div>
    </header>
  );
};
