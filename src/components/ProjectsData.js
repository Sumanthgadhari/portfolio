import React from "react";
import ProjectCard from "./Projects";

const projects = [
  {
    title: "Traffic Guidance Device for Emergency Vehicles",
    shortDescription:
      "Efficient traffic management for emergency vehicles using RFID.",
    details:
      "This project utilizes RFID and Lo-Ra technology integrated with AI algorithms to ensure priority clearance for emergency vehicles, reducing delays and enhancing efficiency.",
    technologies: ["RFID", "Lo-Ra Technology", "AI Algorithms"],
    link: "https://drive.google.com/file/d/12RYRS0pZsgmk-_gxePKrtEnQzX7L34e4/view?usp=drive_link",
  },
  {
    title: "Aircraft Noise Reduction Technology",
    shortDescription:
      "Innovative materials for noise reduction and energy harvesting.",
    details:
      "Developed a multi-layered solution using flax fibers, ceramic foam, and piezoelectric materials to reduce jet noise and explore energy harvesting possibilities.",
    technologies: ["Flax Fibers", "Ceramic Foam", "Piezoelectric Materials"],
    link: "https://docs.google.com/presentation/d/1iGN29TIvr92ZKksTqtrg5T6HxtwK6uFp/edit?usp=drive_link&ouid=104784650647781182524&rtpof=true&sd=true",
  },
  {
    title: "Urban Air Quality Monitoring Micro-Satellite",
    shortDescription: "Compact device for real-time air quality monitoring.",
    details:
      "Designed a cost-effective micro-satellite with sensors like MQ135 and MQ7, integrated with IoT platforms for public environmental health awareness.",
    technologies: ["IoT Platforms", "MQ135", "MQ7", "WiFi"],
    link: "https://drive.google.com/file/d/1ge6rGNp6Ym2TCmEOBPAn0gnIX6ybAuhD/view?usp=drive_link",
  },
];

const ProjectsGrid = () => {
  return (
    <section id="projects" className="py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              shortDescription={project.shortDescription}
              details={project.details}
              technologies={project.technologies}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
