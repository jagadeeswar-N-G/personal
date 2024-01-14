import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Logo from "./Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <Container as="footer" className="w-full">
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2"></div>
      <div className="mb-20 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
        <Link href={"/"} aria-label="Home">
          <Logo className="h-8">JR.</Logo>
        </Link>
        <p className="text-sm text-neutral-700">
          © copyright {new Date().getFullYear()} Made by{" "}
          <span className="font-medium">Jagadeeswar</span>
        </p>
      </div>
    </Container>
  );
};

export default Footer;
