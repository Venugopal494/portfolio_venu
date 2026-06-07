import React from "react";
import "./Experience.scss";

export default function Experience() {
  const currentYear = new Date().getFullYear();

  const data = [
    {
      id: 1,
      name: "ZF Group, Hyderabad",
      year: `2022 - ${currentYear}`,
      title: "Role: SIL Engineer",
      role: [
        "Worked as a Tools Developer using C, C++ and Python for automotive applications",
        "Developed and maintained automation tools in the automotive domain",
        "Built ARXML Generator Tool for ECU configuration and data exchange formats",
        "Developed SIL (Software-in-the-Loop) tools for ADAS software integration and validation",
        "Worked on SDF Converter Tool for data format conversion in testing workflows",
        "Used tools and environments such as VS Code, Qt, Linux, Rhapsody, and DaVinci Developer",
        "Involved in debugging, enhancement, and optimization of automotive software tools"
      ],
      tools: "Tools Used: SIL System Integration, C++, Python, Qt, Docker, Linux",
      icon: "/assets/ZF.svg.png",
      featured: true,
    },
  ];

  return (
    <div className="Experience" id="Experience">
      <h1>Experience</h1>

      <div className="container">
        {data.map((d) => (
          <div key={d.id} className={d.featured ? "card featured" : "card"}>
            
            <div className="top">
              <img className="icon" src={d.icon} alt={`${d.name} logo`} />
            </div>

            <div className="content">
              <h3 className="name">{d.name}</h3>
              <h3 className="title">{d.title}</h3>
              <h3 className="year">{d.year}</h3>

              {/* Role Points */}
              <ul className="role">
                {d.role.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h4 className="tools">{d.tools}</h4>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
