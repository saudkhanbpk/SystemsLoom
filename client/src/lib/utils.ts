import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollToTop(behavior: ScrollBehavior = "smooth") {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior
  });
}

export function scrollToElement(elementId: string, behavior: ScrollBehavior = "smooth") {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior,
      block: "start"
    });
  }
}
