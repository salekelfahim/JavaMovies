import { Routes } from '@angular/router';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { FavoritesComponent } from './favorites/favorites.component';

export const routes: Routes = [
  { path: '', component: MovieSearchComponent },
  { path: 'favorites', component: FavoritesComponent },
];
