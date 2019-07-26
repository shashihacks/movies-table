import React, {Component} from 'react';
import Form from './common/form'
class LoginForm extends Form {
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
        {this.renderInput('email','Username','text','Enter email')}
        {this.renderInput('password','Password','password','Enter Password')}
        {this.renderButton('Submit')}

        </form>
      </div>

    );
  }
}

export default LoginForm;