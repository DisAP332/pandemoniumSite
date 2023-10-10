import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const offState = {
  display: false,
  css: {
    display: "none",
  },
};

const onState = {
  display: true,
  css: {
    display: "block",
  },
};

const resetState = {
  home: offState,
  events: offState,
  menu: offState,
};

const initialState = {
  home: onState,
  events: offState,
  menu: offState,
};

const sectionTogglerSlice = createSlice({
  name: "section_toggler",
  initialState,
  reducers: {
    showOrHideSection: (state, action: PayloadAction<string>) => {
      switch (action.payload) {
        case "home":
          state = {
            ...resetState,
            home: onState,
          };
          return state;
        case "events":
          state = {
            ...resetState,
            events: onState,
          };
          return state;
        case "menu":
          state = {
            ...resetState,
            menu: onState,
          };
          return state;
      }
    },
  },
});

export const { showOrHideSection } = sectionTogglerSlice.actions;

export default sectionTogglerSlice.reducer;
