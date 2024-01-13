import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import React from "react";
import { MdEngineering } from "react-icons/md";
import { GiSpiderWeb } from "react-icons/gi";
import { SiSocialblade } from "react-icons/si";
import { TbPresentationAnalytics } from "react-icons/tb";
import { TfiThought } from "react-icons/tfi";
import { SiGooglescholar } from "react-icons/si";

const page = () => {
  return (
    <Container className="pt-10 sm:pt-24 lg:pt-20">
      <FadeIn className="">
        <div>
          <div className="flex items-center h-screen text-black">
            <div className="flex items-center justify-center h-[800px] w-1 bg-black relative">
              <div className="absolute top-0 left-[-5px] w-[15px] h-[10px] bg-orange-400 rounded-full" />
              <div className="absolute top-0 left-[25px] md:w-[600px] w-[300px]">
                <p className=" flex font-medium items-center gap-3">Technology Engineer <GiSpiderWeb /> </p>
                <p>ChangeCX</p>
                <p className="md:font-normal text-sm md:text-base  text-gray-700 text-justify"> Specializing in Next.js, React, TypeScript, and microservices architecture, scalable web solutions. With a strong emphasis on headless CMS, I contribute to the creation of high-performance websites that align with the dynamic needs of our clients</p>
              </div>

              <div className="absolute top-[22%] left-[-5px] w-[15px] h-[10px] bg-green-700 rounded-full" />
              <div className="absolute top-[22%] left-[25px] md:w-[600px] w-[300px]">
                <p className="flex items-center gap-3 font-medium">Social Media <TbPresentationAnalytics /></p>
                <p>Vahani Organization</p>
                <p className="font-normal text-sm md:text-base text-gray-700 text-justify">Crafted impactful social media content and posts to enhance brand visibility and engagement. Executed content creation strategies, ensuring consistent messaging across diverse platforms.</p>
              </div>
              <div className="absolute top-[42%] left-[-5px] w-[15px] h-[10px] bg-red-200 rounded-full" />
              <div className="absolute top-[42%] left-[25px] md:w-[600px] w-[300px]">
                <p className="flex items-center gap-3 font-medium">Young Leader Intern <SiSocialblade /></p>
                <p>THEV Consulting</p>
                <p className="font-normal text-sm md:text-base text-gray-700 text-justify">Boosted social media engagement through strategic initiatives</p>
              </div>
              <div className="absolute top-[54%] left-[-5px] w-[15px] h-[10px] bg-blue-700 rounded-full" />
              <div className="absolute top-[54%] left-[25px] md:w-[600px] w-[300px]">
                 <p className=" flex items-center font-medium gap-3">Engineer  <MdEngineering /></p>
                <p>Vellore Institute Of Technology</p>
                <p className="font-normal text-sm md:text-base text-gray-700 text-justify"> Equipped with a strong foundation in electrical engineering principles and communication technologies, I bring a solid academic background to complement my professional endeavors</p>
              </div>
              <div className="absolute top-[73%] left-[-5px] w-[15px] h-[10px] bg-red-700 rounded-full" />
              <div className="absolute top-[73%] left-[25px] md:w-[600px] w-[300px]">
              <p className=" flex items-center font-medium gap-3">Graphic Designer  <TfiThought /></p>
                <p>Philosophy Society</p>
                <p className="font-normal text-sm md:text-base text-gray-700 text-justify">Proficient in crafting compelling and thought-provoking content, I have been entrusted with the responsibility of designing and curating posts on philosophy.</p>
              </div>
              <div className="absolute top-[89%] left-[-5px] w-[15px] h-[10px] bg-red-700 rounded-full" />
              <div className="absolute top-[89%] left-[25px] md:w-[600px] w-[300px]">
              <p className=" flex items-center font-medium gap-3">Vahani Scholar <SiGooglescholar /></p>
                <p>Vahani</p>
                <p className="font-normal text-sm md:text-base text-gray-700 text-justify">Privileged to be a Vahani Scholar, this prestigious scholarship has not only provided financial support but has also been instrumental in fostering my professional growth. </p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default page;
