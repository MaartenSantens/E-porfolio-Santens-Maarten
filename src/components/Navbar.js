import React from "react";
import contentData from "../content.json";
import { Fade } from "react-awesome-reveal";

/*
 * This section checks if the section_enabled is true or false
 * and if true then the item inside the navbar is
 */

const Navbar = () => {
  const sections = [
    {
      id: "overmij",
      text: contentData.about_me.section.navbar_name,
      enable: contentData.about_me.section.enable_section,
    },
    {
      id: "opleiding",
      text: contentData.academics.section.navbar_name,
      enable: contentData.academics.section.enable_section,
    },
    {
      id: "ervaring",
      text: contentData.experience.section.navbar_name,
      enable: contentData.experience.section.enable_section,
    },
    {
      id: "projecten",
      text: contentData.projects.section.navbar_name,
      enable: contentData.projects.section.enable_section,
    },
  ];

  return (
    <div className="navlist">
      <Fade cascade damping={0.2} triggerOnce={true}>
        <ul>
          <li>
            <a href={contentData.general.navbar_social_links.portfolio}>/Home</a>
          </li>
          {sections.map((section) => {
            return section.enable ? (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.text}</a>
              </li>
            ) : null;
          })}
        </ul>
      </Fade>
    </div>
  );
};

export default Navbar;
