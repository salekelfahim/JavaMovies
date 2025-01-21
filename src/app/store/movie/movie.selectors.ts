import { createSelector } from '@ngrx/store';
import { AppState } from '../../app.state';

export const selectMovieState = (state: AppState) => state.movie;

export const selectMovies = createSelector(selectMovieState, (state) => state.movies);
export const selectFavorites = createSelector(selectMovieState, (state) => state.favorites);
export const selectLoading = createSelector(selectMovieState, (state) => state.loading);
export const selectError = createSelector(selectMovieState, (state) => state.error);
