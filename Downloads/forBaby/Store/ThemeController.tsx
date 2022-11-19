import React from 'react';
import {createSlice} from '@reduxjs/toolkit';
import {Themes} from '../Styles/index';

const {Dark: darkTheme, Light: lightTheme} = Themes;

const uiStore = createSlice({
  name: 'darkMode',
  initialState: darkTheme,
  reducers: {
    toggleDarkMode: state => {
      if (state === darkTheme) {
        return lightTheme;
      } else {
        return darkTheme;
      }
    },
  },
});

export const {toggleDarkMode} = uiStore.actions;

export default uiStore.reducer;
