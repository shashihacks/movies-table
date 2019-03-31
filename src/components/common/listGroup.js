import React, {Component} from 'react';
import {genres} from './../../services/fakeGenreService';
import PropTypes from 'prop-types'

const ListGroup = (props) => {
  const {items, valueProperty, textProperty, onItemSelect, selectedItem} = props
  console.log(selectedItem)
  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          key={item[valueProperty]}
          onClick={() => onItemSelect(item)}
          className={selectedItem==item ? "list-group-item active" : "list-group-item"}>{item[textProperty]}
        </li>
      ))}

    </ul>
  )

}

export default ListGroup;