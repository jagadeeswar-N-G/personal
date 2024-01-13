"use client";
import ContactMotion from "@/components/ContactMotion";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import React, { useEffect, useState } from "react";

const Contact = () => {
  return (
    <>
    <Container>
      <FadeIn >
         <ContactMotion />
      </FadeIn>
    </Container>
     
    </>
  );
};
export default Contact;
