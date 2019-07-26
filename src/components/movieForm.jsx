import React, { Component } from 'react';
import Form from './common/form';
import {getMovie , saveMovie} from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
class MovieForm extends Form  {
    state = {
        data : {
            title : "",
            genreId : "",
            numberInStock : "",
            dailyRentalRate : ""

        },
        genres: [],
        errors: {}
    }
    // validateProperty =({name,value}) =>{
    //     // if(name==='title') {
    //     //   if(value.trim()==='')  return 'Movie name is required'
    //     // }
    //     if(name==='num') {
    //       if(value.trim()==='')  return 'Stock Number is required'
    //     }
    //     if(name==='GenreId') {
    //         if(value.trim()==='')  return 'Genre selection is required'
    //       }
    //     if(name==='rentalRate') {
    //          if(value.trim()==='')  return 'rental Rate is required'
    //     }
    //   }
    // handleChange = ({currentTarget : input}) => {
    //     const errors = {...this.state.errors};
    //     const errorMessage = this.validateProperty(input);
    //     if(errorMessage) errors[input.name]= errorMessage
    //     else delete errors[input.name]
    //     const data = {
    //       ...this.state.data
    //     }
    //     data[input.name] = input.value
    
    //     this.setState({data,errors})
    //   }

      

    componentDidMount() {
        const genres = getGenres();
        this.setState({genres});

        const movieId = this.props.match.params.id;
        if(movieId == "new") return;

        const movie = getMovie(movie)
        if(!movie) return this.props.history.replace('/not-found');


        this.setState({data : this.mapeMovieMode(movie) });
    }

    mapeMovieMode(movie) {
        return {
            _id: movie._id,
            title: movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate
        }
    }

    doSubmit = () => {
        console.log(this.state.data,"saved")
       saveMovie(this.state.data) 
       this.props.history.push('/movies')
    }


    render() {
        return ( 
            <React.Fragment>
            <h1>Movie Form</h1>
            <form onSubmit={this.handleSubmit} >
            {this.renderInput('title','Title','text','Enter Movie name')}
            {this.renderSelect('genreId', 'Genre', this.state.genres)}
            {this.renderInput('numberInStock','Number in Stock','number','Enter Stock Count')}
            {this.renderInput('dailyRentalRate','Daily Rental Rate','text','Enter daily Rental rate')}
            
             {this.renderButton('Save')}
            </form>
            </React.Fragment>
           
         )
    }

     
}
 
export default MovieForm;