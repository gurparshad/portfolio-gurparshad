import React from "react";

interface TabButtonProps {
  active: boolean;
  selectTab: any;
  children: any;
}

const TabButton: React.FC<TabButtonProps> = ({active, selectTab, children}) => {
  const buttonClasses = active ? "text-white border-green-500 border-b" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>{children}</p>
    </button>
  );
};

export default TabButton;
