import React from "react";
import {CodeBracketIcon, EyeIcon} from "@heroicons/react/24/outline";
import Link from "next/link";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  website: string;
  techStack: string;
  git?: string;
  gitBackend?: string;
  gitFrontend?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgUrl,
  title,
  description,
  website,
  techStack,
  git,
  gitBackend,
  gitFrontend,
}) => {
  return (
    <div>
      <div
        className="group rounded-t-xl h-52 md:h-72 bg-center relative overflow-hidden"
        style={{background: `url(${imgUrl})`, backgroundSize: "cover"}}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex flex-col gap-[30px] group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center">
          <p className="text-white px-4">
            <span className="text-white">Tech Stack: </span>
            {techStack}
          </p>
          <div className="flex">
            {website && (
              <Link
                target="_blank"
                href={website}
                className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white mr-4 group/link flex flex-col justify-center items-center"
              >
                <EyeIcon className="h-10 w-10 text-[#ADB7BE] group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                <p className="text-[#ADB7BE] mt-[80px]">Preview</p>
              </Link>
            )}
            {git && (
              <Link
                target="_blank"
                href={git}
                className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link flex flex-col justify-center items-center"
              >
                <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                <p className="text-[#ADB7BE] mt-[80px]">Code</p>
              </Link>
            )}
            {gitBackend && (
              <Link
                target="_blank"
                href={gitBackend}
                className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link flex flex-col justify-center items-center"
              >
                <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                <p className="text-[#ADB7BE] mt-[80px]">Backend</p>
              </Link>
            )}
            {gitFrontend && (
              <Link
                target="_blank"
                href={gitFrontend}
                className="ml-5 h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link flex flex-col justify-center items-center"
              >
                <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                <p className="text-[#ADB7BE] mt-[80px]">Frontend</p>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="bg-[#181818] rounded-b-xl py-6 px-4 text-white">
        <h5 className="font-lg font-semibold">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
