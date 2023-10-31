"use client";
import React, {useState} from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Nexa Bank",
    description: "Nexa Bank landing page",
    image: "/images/projects/nexa-bank.png",
    tag: ["All", "Frontend"],
    git: "https://github.com/gurparshad/nexa-bank",
    website: "https://nexabank.netlify.app/",
  },
  {
    id: 2,
    title: "Moviez - Trailer Home",
    description: "Latest Movie Trailers and Plot",
    image: "/images/projects/moviez.png",
    tag: ["All", "Frontend"],
    git: "https://github.com/gurparshad/moviez",
    website: "https://moviez-thetrailerhome.netlify.app/",
  },
  {
    id: 3,
    title: "Cash Flow",
    description: "Financial analytics",
    image: "/images/projects/cashFlow.png",
    tag: ["All", "Full Stack"],
    git: "https://github.com/gurparshad/CashFlow",
    website: "https://cashflow99.netlify.app/",
  },
  {
    id: 4,
    title: "Airbnb",
    description: "UI",
    image: "/images/projects/airbnb.png",
    tag: ["All", "Frontend"],
    git: "https://github.com/gurparshad/airBnb-clone",
    website: "",
  },
  {
    id: 5,
    title: "WC Real Estate",
    description: "Complete Real estate platform",
    image: "/images/projects/WC.jpeg",
    tag: ["All", "Full Stack"],
    gitFrontend: "https://github.com/gurparshad/WCRealEstate-Frontend",
    gitBackend: "https://github.com/gurparshad/WCRealEstate-Backend",
  },
  {
    id: 6,
    title: "Gym - E Shop",
    description: "E commerce store for gym products",
    image: "/images/projects/gym.jpeg",
    tag: ["All", "Full Stack"],
    gitFrontend: "https://github.com/gurparshad/gym-e-shop-frontend",
    gitBackend: "https://github.com/gurparshad/gym-e-shop-backend",
  },
  {
    id: 7,
    title: "Spotify UI",
    description: "User interface",
    image: "/images/projects/spotify.png",
    tag: ["All", "Frontend"],
    git: "https://github.com/gurparshad/Spotify-web-player-ui",
    website: "https://spotify-web-player.netlify.app/",
  },
  {
    id: 8,
    title: "Recipe Guru",
    description: "Recipe App",
    image: "/images/projects/recipe.jpeg",
    tag: ["All", "Frontend"],
    website: "https://recepiguru.netlify.app",
  },
  {
    id: 9,
    title: "Quit Smoking",
    description: "Quit Smoking Application",
    image: "/images/projects/smoking.jpeg",
    tag: ["All", "Full Stack"],
    gitFrontend: "https://github.com/gurparshad/quit-smoking-frontend",
    gitBackend: "https://github.com/gurparshad/quit-smoking-backend",
  },
  {
    id: 10,
    title: "Covid 19 tracker",
    description: "Coronoa virus cases tracker",
    image: "/images/projects/corona.png",
    tag: ["All", "Frontend"],
    website: "https://corona-tracker-covid-19.netlify.app",
    git: "https://github.com/gurparshad/covid-19-tracker",
  },
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));

  const handleTagChange = (newTag: any) => {
    setTag(newTag);
  };

  return (
    <section id="projects" className="md:pt-[100px] pt-20">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
      <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
        <ProjectTag name="All" onClick={handleTagChange} isSelected={tag === "All"} />
        <ProjectTag name="Frontend" onClick={handleTagChange} isSelected={tag === "Frontend"} />
        <ProjectTag name="Full Stack" onClick={handleTagChange} isSelected={tag == "Full Stack"} />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
