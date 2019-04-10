import React, {Component} from 'react';
import Movies from './components/movies'
import {Route, Redirect, Switch} from "react-router-dom"
import './App.css';
import Customers from './components/customers'
import NotFound from './components/notFound';
import Rentals from './components/rentals';
import MovieForm from './components/movieForm';
import Nabvbar from './components/navbar';
import LoginForm from './components/loginForm';
class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Nabvbar></Nabvbar>
        <main className="container">
          {/* <Movies></Movies> */}

          <Switch>
          <Route path="/login" component= {LoginForm}></Route>
          <Route path="/movies/:id" component= {MovieForm}></Route>
            <Route path="/customers" component={Customers}/>
            <Route path="/movies" component={Movies}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/movie-form" component={MovieForm}></Route>
            <Route path="/movies" component={Movies}></Route>
            <Redirect from="/" to="/movies"></Redirect>
          </Switch>

        </main>
      </React.Fragment>

    );
  }
}

export default App;
