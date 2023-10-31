"use client";
import React, {useState} from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import {motion} from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 flex flex-wrap gap-6">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React js</li>
        <li>Redux</li>
        <li>Angular</li>
        <li>Vue js</li>
        <li>Nuxt js</li>
        <li>Next js</li>
        <li>SQL</li>
        <li>PostgreSQL</li>
        <li>MySQL</li>
        <li>Node.js</li>
        <li>Nest js</li>
        <li>Express</li>
        <li>Rest API</li>
        <li>GraphQL</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>CI/CD</li>
        <li>GIT</li>
        <li>Digital Ocean</li>
        <li>AWS</li>
        <li>Python</li>
        <li>C++</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Lovely Professional University, India</li>
        <li>Estonian University of Applied sciences and Entrepreneurship</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>May 2021 - Present [Visioncraft] - FullStack Developer</li>
        <li>Feb 2020 - Sep 2020 [Amplaffy] - FullStack Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id: string) => {
    setTab(id);
  };

  return (
    <section className="pt-20 text-white" id="about">
      <motion.div
        initial={{opacity: 0, scale: 0.5}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 0.5}}
        className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
      >
        <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
          <Image alt="about-image" src="/images/about.jpeg" width={500} height={500} />
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-white texxt-base md:text-lg">
              I am a full stack web developer with a passion for creating interactive and responsive web applications. I
              have experience working with modern web technologies. I am a quick learner and I am always looking to
              expand my knowledge and skill set. I am a team player and I am excited to work with others to create
              amazing digital products.
            </p>
            <div className="flex flex-row justify-start mt-8">
              <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                Skills
              </TabButton>
              <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                Education
              </TabButton>
              <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>
                Experience
              </TabButton>
            </div>
            <div className="mt-8">
              {/* @ts-ignore */}
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
