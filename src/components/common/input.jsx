import React from 'react';

const Input = (props) => {
    const {label,name,value,onChange} = props
  return (
    <div className="form-group">
      <label htmlFor={name}> {label} </label>
      <input
        onChange={onChange}
        value={value}
        name={name}
        type="email"
        autoFocus
        className="form-control"
        id={name}
        aria-describedby="emailHelp"
        placeholder="Enter email"/>
    </div>
  );
}

export default Input;