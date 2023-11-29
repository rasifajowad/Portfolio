import React from "react";
import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-emerald-100 py-16">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">Rasif <span className="text-emerald-500">Ajowad</span></h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            UI/UX Designer & Front-end developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            Turning Ideas Into Reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/rasifajowad">
              <FaGithubSquare className="h-8 w-8 text-slate-700 hover:text-black duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/rasif-ajowad-ab87061b9/">
              <FaLinkedin className="h-8 w-8 text-slate-700 hover:text-black duration-300" />
            </a>
            <a href="https://twitter.com/Rasif_Ajowad">
              <FaTwitterSquare className="h-8 w-8 text-slate-700 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} alt="heroImage" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
