import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Link from "next/link";

const Section = ({ title, link, children }: any) => {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="md:w-[33.75rem] flex-none lg:w-[45rem] mt-5">
            <Link href={link} target="_blank" rel="noopener noreferrer">
              <p className="text-black text-xl flex items-center justify-center h-20 gap-6">
                Code On Github <BsGithub />
              </p>
            </Link>
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
