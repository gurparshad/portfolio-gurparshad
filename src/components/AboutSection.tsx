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
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
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
          <Image alt="about-image" src="/images/about-image.png" width={500} height={500} />
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-white texxt-base md:text-lg">
              I am a full stack web developer with a passion for creating interactive and responsive web applications. I
              have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS,
              and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team
              player and I am excited to work with others to create amazing applications.
            </p>
            <div className="flex flex-row justify-start mt-8">
              <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                Skills
              </TabButton>
              <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                Education
              </TabButton>
              <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
                Certifications
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
