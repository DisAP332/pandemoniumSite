"use client";

import Image from "next/image";
import logo from "../assets/images/panda_logo.png";
import { useDispatch } from "react-redux";
import { showOrHideSection } from "@/reduxSlices/sectionTogglerSlice";
import rock_icon from "../assets/icons/concert.svg";
import drink_icon from "../assets/icons/drink.svg";

export default function NavigationTop() {
  const dispatch = useDispatch();
  return (
    <div className="navigation_top">
      <div onClick={() => dispatch(showOrHideSection("home"))}>
        <Image src={logo} alt="logo" width={150} className="m-3" />
        <h1>PANDEMONIUM</h1>
        <h2>ART | DRINKS | FOOD</h2>
      </div>
      <div>
        <div
          onClick={() => {
            dispatch(showOrHideSection("menu"));
          }}
        >
          <Image src={drink_icon} alt="Rock Icon" width={40} />
        </div>
        <div onClick={() => dispatch(showOrHideSection("events"))}>
          <Image src={rock_icon} alt="Rock Icon" width={40} />
        </div>
      </div>
    </div>
  );
}
