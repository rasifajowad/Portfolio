import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img
          src={aboutSvg}
          alt="Have a Coffee With me"
          className="w-full h-64 text-emerald-500"
        />
        <article>
          <SectionTitle text="Have a Coffee ☕" />
          <p className="text-slate-600 mt-8 leading-loose">
            UI/UX Designer skilled in Figma and a Front-end Developer fluent in
            HTML, CSS, JS, and React. On a journey to evolve into a Fullstack
            Developer. Passionate about merging design finesse with seamless
            functionality. Let's discuss projects over coffee—I'm all about
            creating digital experiences that leave a lasting impression.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
