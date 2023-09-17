import { MovieInterface } from "./MovieListInterface";
import { DeletedMovieInterface } from "./DeletedMoviesInterface";
import { WatchedMovieInterface } from "./WatchedMoviesInterface";

export default interface StateInterface {
  movieList: MovieInterface[]
  deletedMovies: DeletedMovieInterface[]
  watchedMovies: WatchedMovieInterface[]
}