import React from "react";

const ExperienceCard = ({ role, company, date, responsibilities }) => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1500"
      data-aos-once="false"
      className="p-6 rounded-xl shadow-md bg-slate-100 min-w-[280px] md:min-w-[320px] flex flex-col"
    >
      <div className="font-medium gap-1 w-full">
        <h1 className="text-xl md:text-2xl font-semibold">{role}</h1>
        <div className="flex items-center justify-center gap-3 text-lg text-gray-700 md:text-xl">
          <span>{company}</span>
        </div>
        <p className="text-base md:text-base text-gray-500">{date}</p>
      </div>
      <div className="mt-4">
        <ul
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-once="false"
          className="pl-3 md:pl-7 list-disc leading-loose text-base text-justify md:text-lg font-medium"
        >
          {responsibilities.map((item, index) => (
            <li key={index} className="py-2 md:py-3">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Experience = ({ experiences }) => {
  return (
    <section className="py-3 px-3 bg-white mt-4 md:mt-7">
      <div className="mx-auto max-w-6xl">
        <div id="experience" className="flex flex-col text-center mb-4 w-full">
          <h1 className="text-3xl sm:text-4xl font-medium title-font mb-2">
            Experience
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg mx-auto leading-relaxed font-medium text-dark-orange text-center"
          >
            Professional Experience
          </p>
        </div>
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              role={exp.role}
              company={exp.company}
              date={exp.date}
              responsibilities={exp.responsibilities}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
