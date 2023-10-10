"use client";

import Image from "next/image";
import facebook_icon from "../assets/icons/facebook.svg";
import phone_icon from "../assets/icons/phone.svg";
import location_icon from "../assets/icons/location.svg";
import home_icon from "../assets/icons/home.svg";
import { useDispatch } from "react-redux";
import { showOrHideSection } from "@/reduxSlices/sectionTogglerSlice";

export default function NavigationSide() {
  const dispatch = useDispatch();

  function socialsRedirect() {
    window.open("https://www.facebook.com/pandemonium859", "_blank");
  }

  return (
    <div className="absolute bottom-60 right-0 sidebar">
      <div className="bg-slate-600 rounded-tl-3xl p-3">
        <Image src={home_icon} alt="home icon" width={50} />
        <div
          className="ml-5"
          onClick={() => dispatch(showOrHideSection("home"))}
        >
          <h1> Home </h1>
        </div>
      </div>

      <div className="bg-sky-500 p-2" onClick={() => socialsRedirect()}>
        <Image src={facebook_icon} alt="facebook icon" width={50} />
        <div className="ml-5">
          <h1> social </h1>
        </div>
      </div>
      <div className="bg-red-500 p-3">
        <Image src={phone_icon} alt="phone icon" width={40} />
        <div className="ml-7">
          <h1> contact </h1>
        </div>
      </div>

      <div className="bg-purple-500 rounded-bl-3xl p-3">
        <Image src={location_icon} alt="location icon" width={40} />
        <div className="ml-7">
          <h1> location </h1>
        </div>
      </div>
    </div>
  );
}
