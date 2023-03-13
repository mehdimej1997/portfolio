"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

type Props = {
  titleOne: string;
  titleTwo: string;
};

export const SectionTitle = ({ titleOne, titleTwo }: Props) => {
  const refContainer = useRef(null);
  const refTitleOne = useRef(null);
  const refTitleTwo = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set([refTitleOne.current, refTitleTwo.current], {
      y: 80,
    });
    gsap.to([refTitleOne.current, refTitleTwo.current], {
      y: -10,
      duration: 0.5,
      stagger: 0.05,
      scrollTrigger: {
        trigger: refContainer.current,
        toggleActions: "restart none none none",
      },
    });
  }, []);

  return (
    <div ref={refContainer} className="text-[68px] leading-snug my-8">
      <div className="overflow-hidden">
        <h2 ref={refTitleOne}>{titleOne}</h2>
      </div>
      <div className="ml-14 overflow-hidden">
        <h2 ref={refTitleTwo}>{titleTwo}</h2>
      </div>
    </div>
  );
};
