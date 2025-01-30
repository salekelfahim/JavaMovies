import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { addToFavorites } from '../store/movie/movie.actions';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    NgForOf
  ]
})
export class HomeComponent {
  movies: any[] = [];
  currentPage = 1;
  totalResults = 0;
  itemsPerPage = 10;

  constructor(private movieService: MovieService, private store: Store<AppState>) {}

  ngOnInit() {
    this.loadMovies(this.currentPage);
  }

  loadMovies(page: number) {
    this.movieService.getPopularMovies(page).subscribe((response: any) => {
      if (response.Search) {
        this.movies = response.Search;
        this.totalResults = parseInt(response.totalResults);
      }
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadMovies(page);
  }

  getPages(): number[] {
    const totalPages = Math.ceil(this.totalResults / this.itemsPerPage);
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  addToFavorites(movie: any) {
    this.store.dispatch(addToFavorites({ movie }));
  }
}
