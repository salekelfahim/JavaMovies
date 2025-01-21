import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { selectFavorites } from '../store/movie/movie.selectors';
import {AsyncPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-favorites',
  standalone: true,
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  imports: [
    AsyncPipe,
    NgForOf
  ]
})
export class FavoritesComponent {
  favorites$ = this.store.select(selectFavorites);

  constructor(private store: Store<AppState>) {} // Add <AppState> here
}
