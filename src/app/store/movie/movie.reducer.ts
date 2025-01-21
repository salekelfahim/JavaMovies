import { createReducer, on } from '@ngrx/store';
import * as MovieActions from './movie.actions';

export interface MovieState {
  movies: any[];
  favorites: any[];
  loading: boolean;
  error: string | null;
}

export const initialState: MovieState = {
  movies: [],
  favorites: [],
  loading: false,
  error: null,
};

export const movieReducer = createReducer(
  initialState,
  on(MovieActions.searchMovies, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(MovieActions.searchMoviesSuccess, (state, { movies }) => ({
    ...state,
    movies,
    loading: false,
  })),
  on(MovieActions.searchMoviesFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(MovieActions.addToFavorites, (state, { movie }) => ({
    ...state,
    favorites: [...state.favorites, movie],
  })),
  on(MovieActions.removeFromFavorites, (state, { movieId }) => ({
    ...state,
    favorites: state.favorites.filter((m) => m.imdbID !== movieId),
  }))
);
