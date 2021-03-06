import React, {Component} from 'react';
import Like from './common/like';
import TableHeader from './common/tableHeader';
import TableBody from './common/tableBody';
import {Link} from 'react-router-dom'
class MoviesTable extends Component {
columns = [
{path :'title', label: 'Title', content: movie => <Link to={`/movies/${movie._id}`}> {movie.title} </Link>,} ,
  {path :'genre.name', label: 'Genre'},
  {path :'numberInStock', label: 'Stock'},
  {path :'dailyRentalRate', label: 'Rate'},
  {key:'like', content: (movie)=> (<Like liked={movie.liked} onClick={() => this.props.onLike(movie)}></Like>) },
  {
    key:'delete', 
  content: (movie)=> (<button onClick={() => this.props.onDelete(movie)} className="btn btn-danger"> Delete
            </button>)
}
]
  render() { 
    const {movies, sortColumn, onSort} = this.props
    return (
      <table className="table">
   
        <TableHeader  columns={this.columns}  sortColumn={sortColumn} onSort={onSort} />       
         <TableBody   data={movies}  columns={this.columns} />
      </table>
    );
  }
}
 

export default MoviesTable;