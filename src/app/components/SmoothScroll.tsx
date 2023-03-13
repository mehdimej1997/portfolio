"use client";

import Lenis from "@studio-freight/lenis";
import React, { useEffect, useLayoutEffect } from "react";
import { ToastContainer } from "react-toastify";

type Props = {};

export const SmoothScroll = ({ children }: any) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: "vertical", // vertical, horizontal
      gestureDirection: "vertical", // vertical, horizontal, both
      smooth: true,
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
};
