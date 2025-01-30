import { Routes } from '@angular/router';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: MovieSearchComponent },
  { path: 'favorites', component: FavoritesComponent },
];
