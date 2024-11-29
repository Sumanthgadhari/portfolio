import React from "react";

const achievements = [
  {
    title: "Star Employee of the Year Award",
    date: "Dec 2022",
  },
  {
    title: "Xcelerate Warrior",
    date: "Dec 2022",
  },
  {
    title: "Star Performer of the Year",
    date: "Jan 2024",
  },
  {
    title: "Team warrior",
    date: "Aug 2024",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Achievements
        </h2>
        <div className="relative border-l-4 border-blue-500">
          {achievements.map((achievement, index) => (
            <div key={index} className="mb-8 pl-8">
              <div className="absolute -left-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
