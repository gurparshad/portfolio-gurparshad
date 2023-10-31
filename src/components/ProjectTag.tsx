import React from "react";

interface ProjectTagProps {
  name: string;
  onClick: any;
  isSelected: boolean;
}

const ProjectTag: React.FC<ProjectTagProps> = ({name, onClick, isSelected}) => {
  const buttonStyles = isSelected
    ? "text-white border-green-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button
      onClick={() => onClick(name)}
      className={`border-2 rounded-full px-6 py-3 text-xl cursor-pointer ${buttonStyles}`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
