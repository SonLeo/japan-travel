import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";
import React, { ReactNode } from "react";

interface CardDataStatProps {
  title: string;
  total: string;
  rate: string;
  levelUp?: boolean;
  levelDown?: boolean;
  children: ReactNode;
}

const CardDataStat: React.FC<CardDataStatProps> = ({
  title,
  total,
  rate,
  levelUp,
  levelDown,
  children,
}) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex justify-between items-center">
        <span className="text-xl font-medium dark:text-white">{title}</span>
        <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
          {children}
        </div>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div className="dark:text-white">
          <h4 className="text-title-md font-bold">{total}</h4>
        </div>

        <span
          className={`flex items-center gap-1 text-sm font-medium ${
            levelUp && "text-meta-3"
          } ${levelDown && "text-meta-1"}`}
        >
          {rate}

          {levelUp && <ArrowUpIcon className="w-4 h-4" />}

          {levelDown && <ArrowDownIcon className="w-4   h-4" />}
        </span>
      </div>
    </div>
  );
};

export default CardDataStat;
