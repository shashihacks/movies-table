import React from 'react';

const Input = (props) => {
    const {label,name,value,onChange,type,placeholder, error} = props
  return (
    <div className="form-group">
      <label htmlFor={name}> {label} </label>
      <input
        onChange={onChange}
        value={value}
        name={name}
        type={type}
        
        className="form-control"
        id={name}
        aria-describedby="emailHelp"
        placeholder={placeholder} />
        {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

export default Input;