import React from "react";
import ProjectsCard from "./ProjectsCard";
import SectionTitle from "./SectionTitle";
import { useFetchProjects } from "../fetchData";

const Projects = () => {
  const { projects } = useFetchProjects();
  return (
    <section className="py-20 align-element" id="projects">
      <SectionTitle text="Web Creations" />
      <div className="grid py-16 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
