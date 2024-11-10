import { TabsProps } from "@/types";

export const Tabs = ({ data, handleSelect, selected }: TabsProps) => {
  return (
    <div className="flex flex-row lg:flex-col gap-2 sm:gap-4">
      {data.map((item, index) => (
        <button
          key={index}
          className={`w-full text-center text-xs sm:text-sm md:text-base lg:text-start font-medium duration-300  hover:bg-light hover:text-dark p-2 sm:px-8 rounded-lg ${
            selected === item.value ? "text-dark bg-light" : "text-light bg-dark"
          }`}
          onClick={() => handleSelect(item.value)}
        >
          {item.display}
        </button>
      ))}
    </div>
  );
};
