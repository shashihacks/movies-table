import React, { Component } from 'react';
import Input from './input'
import Select from './select';
class Form extends Component {
    state = {
        data: {},
        errors: {},
       
    
      }
     
      validate = () =>{
        let errors = {};
        const {data} = this.state
        console.log(data)
        if(data.email==='') {
          errors.email = "Enter valid email"
        }
        if(data.password==='') {
          errors.password = "Enter valid password"
        }
        if(data.title==='') {
          errors.title = "Enter valid Title"
        }
        if(data.numberInStock==='') {
          errors.numberInStock = "Enter valid numberInStock"
        }
        if(data.genreId==='') {
          errors.genreId = "Enter valid genreId"
        }
        if(data.dailyRentalRate==='') {
          errors.dailyRentalRate = "Enter valid dailyRentalRate"
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
        if(name==='title') {
          if(value.trim()==='')  return 'Movie name is required'
        }
        if(name==='numberInStock') {
          if(value.trim()==='')  return 'Stock Number is required'
        }
        if(name==='genreId') {
            if(value.trim()==='')  return 'Genre selection is required'
          }
        if(name==='dailyRentalRate') {
             if(value.trim()==='')  return 'Rental Rate is required'
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
          disabled = {this.validate()}
          type="submit" className="btn btn-primary">{label}</button>)
      }


      renderInput(name,label,type='text',placeholder) {
        const {data,errors} = this.state;
      return  <Input
        name={name}
        type={type}
        placeholder = {placeholder}
        value={data[name]}
        error ={errors[name]}
        onChange={this.handleChange}
        label={label}/>
      }


      
      renderSelect(name,label, options) {
        const {data, errors} = this.state
          return(          
            <Select
              name= {name}
              value= {data[name]}
              label= {label}
              options={options}
              onChange={this.handleChange}
              error ={errors[name]} 
            />
         );
      }


}
 
export default Form;