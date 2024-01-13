"use client";
import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
import FadeIn from "./FadeIn";
import Container from "./Container";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { TfiInstagram } from "react-icons/tfi";
import BackgroudText from "./BackgroudText";

const ContactMotion = () => {
  const contact = [
    {
      title: "Instagram",
      href: "https://www.instagram.com/jagadeeswaar/",
      icon: TfiInstagram,
    },
    {
      title: "GitHub",
      href: "https://github.com/jagadeeswar-N-G",
      icon: BsGithub,
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/jagadeeswar-n-g-0a2b6b202/",
      icon: BsLinkedin,
    },
    {
      title: "Email",
      href: "https://www.linkedin.com/in/jagadeeswar-n-g-0a2b6b202/",
      icon: BsLinkedin,
    },
  ];
  return (
    <>
    <div className="relative">
      <div className="flex items-center font-semibold">
      <BackgroudText />
      </div>
      <Container className="absolute top-0 left-1/3 h-full flex items-center justify-center mt-24 md:mt-4 z-10">
        <FadeIn className="">
          <section>
            {contact.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  aria-label={item.title}
                  className="transition text-black hover:text-gray-700"
                >
                  <p className="text-3xl md:text-6xl font-semibold hover:animate-ping">
                    {item.title}
                  </p>
                </Link>
              </li>
            ))}
          </section>
        </FadeIn>
      </Container>
      </div>
    </>
  );
};

export default ContactMotion;
