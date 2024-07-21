import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getCsrfToken = () => {
  const matches = document.cookie.match(new RegExp("(^| )XSRF-TOKEN=([^;]+)"));
  return matches ? decodeURIComponent(matches[2]) : "";
};

export const sortByNewest = (data: Todo[]) => {
  return [...data].sort((a, b) => b.id - a.id);
};

export const sortByOldest = (data: Todo[]) => {
  return [...data].sort((a, b) => a.id - b.id);
};

export const sortByAscending = (data: Todo[]) => {
  return [...data].sort((a, b) => a.title.localeCompare(b.title));
};

export const sortByDescending = (data: Todo[]) => {
  return [...data].sort((a, b) => b.title.localeCompare(a.title));
};

export const sortByIsActive = (data: Todo[]) => {
  return [...data].sort((a, b) => Number(b.completed) - Number(a.completed));
};
