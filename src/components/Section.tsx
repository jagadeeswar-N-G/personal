import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Image from "next/image";
import poster from "../images/poster-selling.png";

const Section = ({ title, image, children }: any) => {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="md:w-[33.75rem] flex-none lg:w-[45rem]">
            <figure className="max-w-sm md:max-w-2xl relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
              <Image
                className="rounded-lg"
                src={poster}
                alt="image description"
              />
            </figure>
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  );
};

export default Section;
