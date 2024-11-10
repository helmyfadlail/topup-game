import { RibbonProps } from "@/types";

export const Ribbon = ({ value, className, parentClassName }: RibbonProps) => {
  return (
    <div className={`absolute overflow-hidden rounded-sm aspect-square -top-2 -right-2 ${parentClassName}`}>
      <div className="absolute top-0 left-0 w-2 h-2 bg-light/70"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 bg-light/70"></div>
      <span className={`ribbon-text ${className}`}>{value}</span>
    </div>
  );
};
