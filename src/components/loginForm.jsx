import React, {Component} from 'react';
import Input from './common/input';

class LoginForm extends Component {
  state = {
    account: {
      email: '',
      password: '',
      errors:''
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted")
  }

  handleChange = (e) => {
    
    let account = {
      ...this.state.account
    }
    let errors = {}
    account[e.target.name] = e.target.value
    if(account.email=='') {
        account.errors= "enter email"
    }
    this.setState({account})
  }
  render() {
    const {account} = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <Input
            name="email"
            value={account.username}
            onChange={this.handleChange}
            label="Username"/>
          <Input
            name="password"
            value={account.password}
            onChange={this.handleChange}
            label="Password"/>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>

    );
  }
}

export default LoginForm;