"use client";

import gsap from "gsap";
import React, { useEffect, useRef } from "react";

type Props = {};

export default function Cursor({}: Props) {
  const cursorContainerRef = useRef<any>();
  const cursorDotRef = useRef<any>();

  const updateCursorPosition = (e: globalThis.MouseEvent | any) => {
    gsap.to("#cursor", {
      duration: 1,
      top: e.clientY - 20 + "px",
      left: e.clientX - 20 + "px",
      ease: "power3.out",
    });

    gsap.to("#cursor-dot", {
      duration: 0,
      top: `${e.clientY}px`,
      left: `${e.clientX}px`,
    });
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.addEventListener("mousemove", (event) => {
      updateCursorPosition(event);
    });

    return () => {
      window.removeEventListener("mousemove", (event) => {
        updateCursorPosition(event);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeof window]);

  return (
    <>
      <div
        ref={cursorContainerRef}
        className="z-[999] h-[50px] w-[50px] border-[2px] border-gray-500 rounded-full fixed pointer-events-none"
        id="cursor"
      ></div>
      <div
        ref={cursorDotRef}
        className="z-[999] h-[10px] w-[10px] bg-black rounded-full fixed pointer-events-none"
        id="cursor-dot"
      ></div>
    </>
  );
}
