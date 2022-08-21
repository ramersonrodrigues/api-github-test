import { configureStore } from '@reduxjs/toolkit';
import sliceUserGithub from 'redux/slices/sliceUserGithub';
import sliceReposUserGithub from 'redux/slices/sliceReposUserGithub';
import sliceTheme from 'redux/slices/sliceTheme';

export const store = configureStore({
  reducer: {
    sliceUserGithub: sliceUserGithub,
    sliceReposUserGithub: sliceReposUserGithub,
    sliceTheme: sliceTheme,
  },
});
