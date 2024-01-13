import React from "react";
import Section from "./Section";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="Poster Selling" image={{shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          This website is for selling{" "}
          <strong className="font-semibold text-neutral-950">Posters</strong> and
          this is responsive with dark mode and flexible navigation
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Technologies Used
      </h3>
      <TagList className="mt-4">
        <TagListItem>next js 14</TagListItem>
        <TagListItem>React</TagListItem>
        <TagListItem>Typescript</TagListItem>
        <TagListItem>Shadcn</TagListItem>
        <TagListItem>Zod</TagListItem>
        <TagListItem>Stripe</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;
