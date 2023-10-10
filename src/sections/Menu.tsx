"use client";
import { fetchData } from "@/reduxSlices/dataSlice";
import { RootState, useAppDispatch } from "@/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import DrinkCard from "./cards/DrinkCard";
import DrinkCardCocktail from "./cards/DrinkCardCocktail";

export default function Menu() {
  const dispatch = useAppDispatch();

  const data = useSelector((state: RootState) => state.site_data.data);

  console.log(data);

  const status = useSelector((state: RootState) => state.site_data.loading);

  const toggler = useSelector((state: RootState) => state.section_toggler.menu);
  return (
    <div style={toggler.css} className="menu_bg text-white">
      <div className="shadow-xl drink_menu">
        <div className="cocktails">
          <div className="menuHeader">
            <h1>COCKTAILS</h1>
          </div>
          <div className="cardContainerCocktails">
            {status === "pending" || status === "rejected" ? (
              <h1>Loading...</h1>
            ) : (
              data[0].Drinks.cocktails.map((items: any) => (
                <div key={items._id} className="drinkCardCocktail">
                  <DrinkCardCocktail {...items} />
                </div>
              ))
            )}
          </div>
        </div>
        <div className="beer">
          <div className="menuHeader">
            <h1>Beer</h1>
          </div>
          <div className="drinkContainer">
            {status === "pending" || status === "rejected" ? (
              <h1>Loading...</h1>
            ) : (
              data[0].Drinks.beers.map((items: any) => (
                <div key={items._id} className="drinkCard">
                  <DrinkCard {...items} />
                </div>
              ))
            )}
          </div>
        </div>
        <div>
          <div className="menuHeader">
            <h1>Seltzers</h1>
          </div>
          <div className="drinkContainer">
            {status === "pending" || status === "rejected" ? (
              <h1>Loading...</h1>
            ) : (
              data[0].Drinks.seltzers.map((items: any) => (
                <div key={items._id} className="drinkCard">
                  <DrinkCard {...items} />
                </div>
              ))
            )}
          </div>
        </div>
        <div>
          {" "}
          <div className="menuHeader">
            <h1>Drafts</h1>
          </div>
          <div className="drinkContainer">
            {status === "pending" || status === "rejected" ? (
              <h1>Loading...</h1>
            ) : (
              data[0].Drinks.drafts.map((items: any) => (
                <div key={items._id} className="drinkCard">
                  <DrinkCard {...items} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
