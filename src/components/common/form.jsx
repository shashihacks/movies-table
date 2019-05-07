import React, { Component } from 'react';
import Input from './input'
class Form extends Component {
    state = {
        data: {},
        errors: {},
       
    
      }
     
      validate = () =>{
        let errors = {};
        const {data} = this.state
        if(data.email==='') {
          errors.email = "Enter valid email"
        }
        if(data.password==='') {
          errors.password = "Enter valid password"
        }
        return     Object.keys(errors).length >0 ?  errors : null
        // return {username : "Username is required"}
      }
      validateProperty =({name,value}) =>{
        if(name==='email') {
          if(value.trim()==='')  return 'Email is required'
        }
        if(name==='password') {
          if(value.trim()==='')  return 'Password is required'
        }
      }

      handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate();
        console.log(errors)
        this.setState({errors :  errors || {}});
        if(errors) return
        this.doSubmit();
    
      }

      handleChange = ({currentTarget : input}) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if(errorMessage) errors[input.name]= errorMessage
        else delete errors[input.name]
        const data = {
          ...this.state.data
        }
        data[input.name] = input.value
    
        this.setState({data,errors})
      }

      renderButton(label) {
          return          ( <button 
          disabled= { this.validate()}
          type="submit" className="btn btn-primary">{label}</button>)
      }

      renderInput(name,label,type='text') {
        const {data,errors} = this.state;
      return  <Input
        name={name}
        type={type}
        placeholder = "Enter Password"
        value={data[name]}
        error ={errors[name]}
        onChange={this.handleChange}
        label={label}/>
      }

    // render() { 
    //     return (  );
    // }
}
 
export default Form;