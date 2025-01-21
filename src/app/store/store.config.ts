import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { movieReducer } from './movie/movie.reducer';
import { provideEffects } from '@ngrx/effects';
import { MovieEffects } from './movie/movie.effects';

export const appStoreConfig = [
  provideStore({ movie: movieReducer }),
  provideEffects([MovieEffects]),
  provideStoreDevtools({ maxAge: 25 }),
];
