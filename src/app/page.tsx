"use client";

import NavigationSide from "@/components/NavigationSide";
import NavigationTop from "@/components/NavigationTop";
import { fetchData } from "@/reduxSlices/dataSlice";
import Events from "@/sections/Events";
import Home from "@/sections/Home";
import Menu from "@/sections/Menu";
import { RootState, useAppDispatch } from "@/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function App() {
  const dispatch = useAppDispatch();

  const status = useSelector((state: RootState) => state.site_data.loading);

  useEffect(() => {
    if (status === "pending") {
      dispatch(fetchData());
    }
  }, [status, dispatch]);

  return (
    <div className="app-wrap">
      <Events />
      <Home />
      <Menu />
      <NavigationTop />
      <NavigationSide />
    </div>
  );
}
