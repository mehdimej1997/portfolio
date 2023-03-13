"use client";

import "../styles/tailwind.css";
import "./globals.css";
import IconBounce from "./components/IconBounce";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ProjectCard from "./components/ProjectCard";
import AboutSection from "./components/AboutSection";
import Lenis from "@studio-freight/lenis";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const ref = useRef<any>(null);
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

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: "vertical", // vertical, horizontal
      gestureDirection: "vertical", // vertical, horizontal, both
      smooth: true,
      // mouseMultiplier: 1,
      // smoothTouch: false,
      // touchMultiplier: 2,
      // infinite: true,
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <main className="font-neue-montreal">
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
        <section className="bg-slate-100 bg-opacity-30 py-[20vh] shadow-xl shadow-slate-50">
          <div className="container mx-auto">
            <div>
              <div>
                <h1 className="text-[68px] leading-snug my-8">
                  Selected <br />
                  <span className="ml-14">Project</span>
                </h1>
              </div>
              <div className="grid grid-cols-12 items-end justify-items-center">
                <ProjectCard
                  imageUrl="/img/sushi.png"
                  title="Sushi-Street"
                  websiteLink="https://sushi-street.com"
                  description="Restaurant"
                />
                <ProjectCard
                  fullHeight
                  imageUrl="/img/nassiha.png"
                  title="An-nassiha"
                  websiteLink="https://an-nassiha.com/"
                  description="Religious Website"
                />
                <ProjectCard
                  fullHeight
                  imageUrl="/img/bookhunter.png"
                  title="Book Hunter"
                  websiteLink="https://apps.apple.com/us/app/bookhunter/id1659667251?ign-itscg=30200&ign-itsct=apps_box_badge"
                  description="Display book vendor’s offers"
                />
                <ProjectCard
                  top
                  imageUrl="/img/cloudlink.png"
                  title="Cloudlink"
                  websiteLink="https://cloudlink.us"
                  description="Agency Website"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-64">
          <AboutSection />
        </section>
        <section
          className="h-screen"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2 style={{ fontWeight: 700, fontSize: "64px" }}>
            In Progress ! 👨‍💻🫡
          </h2>
        </section>
        <ToastContainer />
      </main>
    </>
  );
}
