import React, {Component} from "react";
import {getMovies} from "../services/fakeMovieService";

import Pagination from './common/pagination'
import paginate from '../utils/paginate'
import {getGenres} from './../services/fakeGenreService';
import ListGroup from './common/listGroup';
import MoviesTable from "./moviesTable";
import _ from 'lodash'
class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    sortColumn : {path: 'title', order:'asc'}
  };

  handleDelete = movie => {
    const movies = this
      .state
      .movies
      .filter(m => m._id !== movie._id);
    this.setState({movies: movies});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
  }

  handleLike = (movie) => {
    console.log('liked', movie)
    const movies = [...this.state.movies]
    const index = movies.indexOf(movie)
    movies[index].liked = !movies[index].liked
    this.setState({movies})

  }

  handlePageChange = (page) => {
    this.setState({currentPage: page.page})
  }

  handleGenre = (geners) => {
    console.log(geners)
    this.setState({selectedGenre: geners, currentPage: 1})
  }


  handleSort =(sortColumn) =>{


    this.setState({
      sortColumn : sortColumn
     })

  }

  componentDidMount = () => {
    const genres = [
      {
        name: 'All Genres',
        _id: ''
      },
      ...getGenres()
    ]
    this.setState({genres: genres, movies: getMovies()})
  }

  render() {

    let count = this.state.movies.length;
    if (count === 0) 
      return <p>No Movies to Show</p>;
    const {pageSize, currentPage, movies: allMovies, genres, selectedGenre,sortColumn} = this.state
    const filteredMovies = selectedGenre && selectedGenre._id
      ? allMovies.filter(m => m.genre._id === selectedGenre._id)
      : allMovies

      //sorting after filtering


     const sortedMovies =  _.orderBy(filteredMovies, [sortColumn.path],[sortColumn.order])
    const movies = paginate(sortedMovies, currentPage, pageSize)
    console.log(genres)
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3">
            <ListGroup
              selectedItem={this.state.selectedGenre}
              onItemSelect={this.handleGenre}
              textProperty='name'
              valueProperty="_id"
              items={genres}></ListGroup>
          </div>

          <div className="col-9">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"/>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <p>
              Showing {filteredMovies.length}
              now in theatre
            </p>
            <MoviesTable
              sortColumn={sortColumn}
             onSort ={this.handleSort}
              onLike={this.handleLike}
              movies={movies}
              onDelete={this.handleDelete}/>
            <Pagination
              currentPage={currentPage}
              itemsCount
              ={filteredMovies.length}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}/>
          </div>

        </div>

      </React.Fragment>
    );
  }
}

export default Movies;
