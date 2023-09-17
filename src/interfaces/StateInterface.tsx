import { MovieInterface } from "./MovieListInterface";
import { DeletedMovieInterface } from "./DeletedMoviesInterface";

export default interface StateInterface {
  movieList: MovieInterface[]
  deletedMovies: DeletedMovieInterface[]
}