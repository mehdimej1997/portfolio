import "../styles/tailwind.css";
import "./globals.css";
import AboutSection from "./components/AboutSection";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { SmoothScroll } from "./components/SmoothScroll";
import { SectionTitle } from "./components/SectionTitle";

export const metadata = {
  title: "Mejjad El Mehdi",
};

export default function Home() {
  return (
    <SmoothScroll>
      <main className="font-neue-montreal">
        <Header />
        <section className="bg-slate-100 bg-opacity-30 py-[20vh] shadow-xl shadow-slate-50">
          <Projects />
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
        <footer className="bg-slate-100 bg-opacity-30 pt-[20vh] shadow-xl shadow-slate-50">
          <div className="container mx-auto flex items-center justify-between">
            <SectionTitle titleOne="Let's Work" titleTwo="Together" />
            <a
              className="bg-black h-32 aspect-square rounded-full text-white font-medium flex items-center justify-center "
              href="mailto:mejjad.el.mehdi@gmail.com"
            >
              <p>Write an Email</p>
            </a>
          </div>
          <div className=" border-t-2 border-slate-400 container mx-auto text-center">
            <p>
              Inspired from Wrong Akram{" "}
              <a
                className="underline decoration-wavy decoration-red-500"
                href="https://www.youtube.com/watch?v=6M819hVz-oo&t=184s"
              >
                video
              </a>{" "}
              developed by <span className="underline">me</span>
            </p>
          </div>
        </footer>
      </main>
    </SmoothScroll>
  );
}
