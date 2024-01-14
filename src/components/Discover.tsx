import React from "react";
import Section from "./Section";
import { TagList, TagListItem } from "./TagList";
import poster from "../images/poster-selling.png";

const Discover = ({project}: any) => {
  return (
    <Section title={project.title} link={project.link}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          {project.description}
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Technologies Used
      </h3>
      <TagList className="mt-4 text-black">
        {
          project.tech.map((item: any) => (
            <TagListItem>{item}</TagListItem>
          ))
        }
        
      </TagList>
    </Section>
  );
};

export default Discover;
