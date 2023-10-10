"use client";
import { RootState, useAppDispatch } from "@/store";
import { EventCard } from "./cards/EventCard";
import { fetchData } from "@/reduxSlices/dataSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Events() {
  const dispatch = useAppDispatch();

  const data = useSelector((state: RootState) => state.site_data.data);
  const status = useSelector((state: RootState) => state.site_data.loading);

  const toggler = useSelector(
    (state: RootState) => state.section_toggler.events
  );

  return (
    <div style={toggler.css} className="events_bg">
      <div className="eventsWrap">
        <div>
          <h1>EVENTS</h1>
        </div>
        <div className="eventsDisplay">
          <div className="cardContainer">
            {status === "pending" || status === "rejected" ? (
              <h1>Loading...</h1>
            ) : (
              data[0].Events.map((items: any) => (
                <div key={items._id} className="eventCard">
                  <EventCard {...items} />
                </div>
              ))
            )}
          </div>
          <div />
        </div>
        <div>e</div>
      </div>
    </div>
  );
}
