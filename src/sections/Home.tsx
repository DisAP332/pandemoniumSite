"use client";

import { RootState } from "@/store";
import { useSelector } from "react-redux";

export default function Home() {
  const toggler = useSelector((state: RootState) => state.section_toggler.home);
  return <div style={toggler.css} className="home_bg"></div>;
}
