import React from 'react';

const Select = (props) => {
  const {options, onChange, name, value} = props
  console.log(props)
  return (
    <React.Fragment>

      <select onChange={onChange} name={name} value={value}>
        {options.map(optionValue => <option key={optionValue} value={optionValue}>{optionValue}</option>)}
      </select>
    </React.Fragment>
  );
}

export default Select;