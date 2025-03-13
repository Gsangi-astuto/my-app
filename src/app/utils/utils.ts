import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

export default cn;
