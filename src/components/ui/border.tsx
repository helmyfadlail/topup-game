import { FaCheck } from "react-icons/fa6";

export const Border = ({ className }: { className?: string }) => {
  return (
    <>
      <i className="absolute top-0 left-0 w-full h-full bg-transparent border-2 rounded-lg border-light"></i>
      <i className={`absolute bottom-0 right-0 p-1 rounded-tl-lg rounded-br-lg bg-light ${className ?? ""}`}>
        <FaCheck className="fill-dark size-4" />
      </i>
    </>
  );
};
