"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { toast } from "react-toastify";

interface Props {
  fullHeight?: boolean;
  imageUrl: string;
  top?: boolean;
  title?: string;
  websiteLink?: string;
  description?: string;
}

export default function ProjectCard({
  fullHeight,
  imageUrl,
  top,
  title,
  websiteLink,
  description,
}: Props) {
  const ref = useRef<any>();
  const viewRef = useRef<any>();
  const imageRef = useRef<any>();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(imageRef.current, {
      scale: 1,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: viewRef.current,
        start: `-=500px center`,
        toggleActions: "restart none none none",
      },
    });
    gsap.to(ref.current, {
      y: -700,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: viewRef.current,
        start: `-=500px center`,
        toggleActions: "restart none none none",
      },
    });
  }, [fullHeight]);

  const mouseEnterUseCase = () => {
    const cursor = document.getElementById("cursor-dot");
    gsap.to("#cursor-dot", {
      height: 100,
      width: 100,
      duration: 0.5,
      backgroundColor: "black",
      onStart: () => {
        var _item = document.createElement("p");
        _item.id = "use-case";
        _item.innerText = "USE CASE";
        cursor?.appendChild(_item);
        gsap.to(_item, {
          y: 35,
          x: 15,
          duration: 0,
          visibility: "visible",
          delay: 0.3,
          opacity: 1,
          fontWeight: 300,
        });
      },
    });
    gsap.to("#cursor", {
      visibility: "hidden",
    });
  };

  const mouseLeaveUseCase = () => {
    gsap.to("#cursor-dot", {
      height: 10,
      width: 10,
      onStart: () => {
        var _item = document.getElementById("use-case");
        _item?.remove();
      },
    });
    gsap.to("#cursor", {
      visibility: "visible",
    });
  };

  return (
    <div
      ref={viewRef}
      className={`col-span-6 cursor-pointer group ${
        top ? "self-start" : ""
      }  w-3/4 mt-16`}
    >
      <div
        onClick={() => {
          toast(
            `☹️ Sorry no use case available!
            😊You Can Click on the title `,
            {
              position: "bottom-center",

              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "dark",
            }
          );
        }}
        className={`relative ${
          fullHeight ? "w-full aspect-[4/5]" : "w-full aspect-video"
        } overflow-hidden`}
        onMouseEnter={mouseEnterUseCase}
        onMouseLeave={mouseLeaveUseCase}
      >
        <Image
          ref={imageRef}
          src={imageUrl}
          alt=""
          fill
          className="z-0 scale-110"
        />
        <div ref={ref} className="project-cover z-50"></div>
      </div>
      <a
        target="_blank"
        rel="noreferrer"
        href={websiteLink}
        className="flex items-center justify-between "
      >
        <div className="row-span-1 my-12">
          <h2 className="text-xl font-medium tracking-wide">
            {title || "Project Name"}
          </h2>
          <p className="font-thin tracking-widest">
            {description || "Website"}
          </p>
        </div>
        <div className="rotate-45 w-fit group-hover:scale-125 group-hover:-rotate-12 group-hover:bg-yellow-400 group-hover:p-2 rounded-full transition-all ease-linear duration-600">
          <BsArrowUpRight size={26} />
        </div>
      </a>
    </div>
  );
}
