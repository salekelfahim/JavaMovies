import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MovieService } from '../../services/movie.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as MovieActions from './movie.actions';

@Injectable()
export class MovieEffects {
  constructor(private actions$: Actions, private movieService: MovieService) {}

  searchMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.searchMovies),
      mergeMap((action) =>
        this.movieService.searchMovies(action.query).pipe(
          map((response: any) => {
            if (response.Error) {
              return MovieActions.searchMoviesFailure({ error: response.Error });
            }
            return MovieActions.searchMoviesSuccess({ movies: response.Search });
          }),
          catchError((error) => of(MovieActions.searchMoviesFailure({ error: error.message })))
        )
      )
    )
  );
}
