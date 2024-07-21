import { useState } from "react";
import { cn } from "../lib/utils";
import FilterItem from "./filter-items";
import type { FilterType } from "./filter-items";
import {
  FilterGeneralIcon,
  FilterNewestIcon,
  FilterOldestIcon,
  FilterAscendingIcon,
  FilterDescendingIcon,
} from "./icons";
import {
  sortByAscending,
  sortByDescending,
  sortByNewest,
  sortByOldest,
  sortByIsActive,
} from "../lib/utils";

const filterData = [
  {
    label: "Terbaru",
    filterType: "newest",
    sortFunction: sortByNewest,
    icon: <FilterNewestIcon />,
  },
  {
    label: "Terlama",
    filterType: "oldest",
    sortFunction: sortByOldest,
    icon: <FilterOldestIcon />,
  },
  {
    label: "A-Z",
    filterType: "ascending",
    sortFunction: sortByAscending,
    icon: <FilterAscendingIcon />,
  },
  {
    label: "Z-A",
    filterType: "descending",
    sortFunction: sortByDescending,
    icon: <FilterDescendingIcon />,
  },
  {
    label: "Belum Selesai",
    filterType: "active",
    sortFunction: sortByIsActive,
    icon: <FilterGeneralIcon className="w-3 h-3" color="#16ABF8" />,
  },
];

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterType>("newest");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left font-poppins">
      <div>
        <button
          onClick={toggleDropdown}
          className="w-10 h-10 rounded-full flex justify-center items-center border border-neutral-200 border-solid"
        >
          <FilterGeneralIcon />
        </button>
      </div>

      <div
        className={cn(
          "absolute right-0 z-10 mt-2 w-[190px] origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
          isOpen
            ? "transition ease-in duration-75 transform opacity-100 scale-100 visible"
            : "transition ease-out duration-100 transform opacity-0 scale-95 invisible"
        )}
      >
        <div className="py-1" role="none">
          {filterData.map((filter) => (
            <FilterItem
              key={filter.filterType}
              label={filter.label}
              filterType={filter.filterType as FilterType}
              sortFunction={filter.sortFunction}
              icon={filter.icon}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              closeDropdown={closeDropdown}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
