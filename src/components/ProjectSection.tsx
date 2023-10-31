"use client";
import React, {useRef, useState} from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import {motion, useInView} from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Nexa Bank",
    description: "Nexa Bank landing page",
    image: "/images/projects/nexa-bank.png",
    tag: ["All", "Frontend"],
    git: "https://github.com/gurparshad/nexa-bank",
    website: "https://nexabank.netlify.app/",
    techStack: "HTML, Tailwind CSS, TypeScript, React",
  },
  {
    id: 2,
    title: "Moviez - Trailer Home",
    description: "Latest Movie Trailers and Plot",
    image: "/images/projects/moviez.png",
    tag: ["All", "Frontend"],
    git: "https://github.com/gurparshad/moviez",
    website: "https://moviez-thetrailerhome.netlify.app/",
    techStack: "HTML,CSS, Material UI, TypeScript, React",
  },
  {
    id: 3,
    title: "Cash Flow",
    description: "Financial analytics",
    image: "/images/projects/cashFlow.png",
    tag: ["All", "Full Stack"],
    git: "https://github.com/gurparshad/CashFlow",
    website: "https://cashflow99.netlify.app/",
    techStack:
      "Build using MERN stack. HTML, CSS, GRID system, Media query, TypeScript, Material UI, MUI data-grid, styled components, Emotion, ReCharts, React, React-router, Redux-toolkit, MongoDB, expressJS, nodeJS",
  },
  {
    id: 5,
    title: "WC Real Estate",
    description: "Complete Real estate platform",
    image: "/images/projects/WC.jpeg",
    tag: ["All", "Full Stack"],
    gitFrontend: "https://github.com/gurparshad/WCRealEstate-Frontend",
    gitBackend: "https://github.com/gurparshad/WCRealEstate-Backend",
    techStack:
      "Frontend - HTML, CSS, React-bootstrap, Axios, JavaScript, React, react-multi-carousel. Backend - Node js, express js, MySQL, sequelize, multer, bcrypt",
  },
  {
    id: 6,
    title: "Gym - E Shop",
    description: "E commerce store for gym products",
    image: "/images/projects/gym.jpeg",
    tag: ["All", "Full Stack"],
    gitFrontend: "https://github.com/gurparshad/gym-e-shop-frontend",
    gitBackend: "https://github.com/gurparshad/gym-e-shop-backend",
    techStack:
      "Frontend - HTML, CSS, Vue, Nuxt js, VueX, TypeScript, bootstrap-vue, axios. Backend - JavaScript, Express js, MongoDB, Mongoose, JWT, Multer, Alogolia Search, Bcrypt",
  },
  {
    id: 9,
    title: "Quit Smoking",
    description: "Quit Smoking Application",
    image: "/images/projects/smoking.jpeg",
    tag: ["All", "Full Stack"],
    gitFrontend: "https://github.com/gurparshad/quit-smoking-frontend",
    gitBackend: "https://github.com/gurparshad/quit-smoking-backend",
    techStack:
      "Frontend - HTML, CSS, JavaScript, React, Moment, Axios, React-Bootstrap, Socket.io. Backend - Node js, express js, MySQL, sequelize, multer, bcrypt, socket.io",
  },
  {
    id: 7,
    title: "Spotify UI",
    description: "This is a spotify desktop player. One can login into the app by using their spotify account.",
    image: "/images/projects/spotify.png",
    tag: ["All", "Frontend"],
    git: "https://github.com/gurparshad/Spotify-web-player-ui",
    website: "https://spotify-web-player.netlify.app/",
    techStack: "Spotify API, HTML, CSS, React, javascript material UI, flex box, context API",
  },
  {
    id: 4,
    title: "Airbnb",
    description: "UI",
    image: "/images/projects/airbnb.png",
    tag: ["All", "Frontend"],
    git: "https://github.com/gurparshad/airBnb-clone",
    website: "",
    techStack: "HTML, Material UI, CSS, javascript, React",
  },
  {
    id: 10,
    title: "Covid 19 tracker",
    description: "Coronoa virus cases tracker",
    image: "/images/projects/corona.png",
    tag: ["All", "Frontend"],
    website: "https://corona-tracker-covid-19.netlify.app",
    git: "https://github.com/gurparshad/coronaTrackerApp",
    techStack: "HTML, Material UI CSS, TypeScript, React, chart js, react-chartjs-2, Axios, leaflet, react-Leaflet.",
  },
  {
    id: 8,
    title: "Recipe Guru",
    description: "Recipe App",
    image: "/images/projects/recipe.jpeg",
    tag: ["All", "Frontend"],
    website: "https://recepiguru.netlify.app",
    techStack: "recipe API, HTML, CSS, TypeScript, React",
  },
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  const cardVariants = {
    initial: {y: 50, opacity: 0},
    animate: {y: 0, opacity: 1},
  };

  const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));

  const handleTagChange = (newTag: any) => {
    setTag(newTag);
  };

  return (
    <section id="projects" className="md:pt-[120px] pt-20" ref={ref}>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
      <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
        <ProjectTag name="All" onClick={handleTagChange} isSelected={tag === "All"} />
        <ProjectTag name="Frontend" onClick={handleTagChange} isSelected={tag === "Frontend"} />
        <ProjectTag name="Full Stack" onClick={handleTagChange} isSelected={tag == "Full Stack"} />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{duration: 0.4, delay: index * 0.4}}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              website={project.website ? project.website : ""}
              techStack={project.techStack}
            />
          </motion.li>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
