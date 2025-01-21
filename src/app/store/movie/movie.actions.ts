import { createAction, props } from '@ngrx/store';

export const searchMovies = createAction(
  '[Movie] Search Movies',
  props<{ query: string }>()
);

export const searchMoviesSuccess = createAction(
  '[Movie] Search Movies Success',
  props<{ movies: any[] }>()
);

export const searchMoviesFailure = createAction(
  '[Movie] Search Movies Failure',
  props<{ error: string }>()
);

export const addToFavorites = createAction(
  '[Movie] Add To Favorites',
  props<{ movie: any }>()
);

export const removeFromFavorites = createAction(
  '[Movie] Remove From Favorites',
  props<{ movieId: string }>()
);
