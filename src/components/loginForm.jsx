import React, {Component} from 'react';
import Input from './common/input';
import Select from './common/select';
import Form from './common/form'
class LoginForm extends Form {
  options = ['a', 'b', 'c']
  state = {
    data: {
      email: '',
      password: '',
     
    },
    errors: {},
   

  }




  doSubmit = () =>{
    //call server if no errors
    console.log("Submitted")
  }




  // handleSelect = (e) => {
  //   this.setState({optionalValue: e.target.value})
  // }
  render() {
   
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        {this.renderInput('email','Username')}
        {this.renderInput('password','Password','password')}
          {/* <Input
            name="email"
            type="email"
            autoFocus
            placeholder = "Enter Email addresss"
            value={data.username}
            onChange={this.handleChange}
            error ={errors.email}
            label="Username"/> */}
          {/* <Input
            name="password"
            type="password"
            placeholder = "Enter Password"
            value={data.password}
            error ={errors.password}
            onChange={this.handleChange}
            label="Password"/> */}

      {this.renderButton('Submit')}
          {/* <button 
          disabled= { this.validate()}
          type="submit" className="btn btn-primary">Submit</button> */}
        </form>
      </div>

    );
  }
}

export default LoginForm;