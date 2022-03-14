import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./like";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  //  mapData = () => {
  //    let title = this.state.movies.map(t => <th key={t.title} >{t.title}</th>);
  //    let body = <tbody>
  //        <tr>
  //            {title}
  //        </tr>
  //    </tbody>
  // }

  deleteRow = (movie) => {
    const movies = this.state.movies.filter((m) => movie._id !== m._id);
    this.setState({ movies });
  };

  handleLiked = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    console.log("liked: ", movie.title);
    this.setState({ movies });
  };

  // h2Tag = () => {
  //     if(this.state.movies.length === 0) return <h2>No Movies to display</h2>;

  //     return <h2>Displaying {this.state.movies.length} movies</h2>
  // }
  render() {
    const { length: count } = this.state.movies;
    if (count === 0) return <p>There are no movies to display</p>;

    return (
      <div>
        <p>Showing {count} movies in database</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th>Fav</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((m) => (
              <tr key={m._id}>
                <td>{m.title}</td>
                <td>{m.genre.name}</td>
                <td>{m.numberInStock}</td>
                <td>{m.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={m.liked}
                    onToggleLike={() => this.handleLiked(m)}
                  />
                </td>
                <td>
                  <button
                    className="btn-danger"
                    onClick={() => this.deleteRow(m)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
