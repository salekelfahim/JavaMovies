import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { searchMovies, addToFavorites } from '../store/movie/movie.actions';
import { selectMovies, selectLoading, selectError } from '../store/movie/movie.selectors';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-movie-search',
  standalone: true,
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
  imports: [
    AsyncPipe,
    FormsModule,
    NgIf,
    NgForOf
  ]
})
export class MovieSearchComponent {
  query = '';
  movies$ = this.store.select(selectMovies);
  loading$ = this.store.select(selectLoading);
  error$ = this.store.select(selectError);

  constructor(private store: Store<AppState>) {}

  search() {
    if (this.query) {
      this.store.dispatch(searchMovies({ query: this.query }));
    }
  }

  addToFavorites(movie: any) {
    this.store.dispatch(addToFavorites({ movie }));
  }
}
