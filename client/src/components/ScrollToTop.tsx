import { useEffect } from "react";
import { useLocation } from "wouter";
import { scrollToTop } from "@/lib/utils";

export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    scrollToTop("smooth");
  }, [location]);

  return null;
}
