import _ from 'lodash'
import React, { Component } from 'react';

const paginate=(items,pageNumber, pageSize) =>{
    const startIndex = (pageNumber - 1) * pageSize;
   return  _(items).slice(startIndex).take(pageSize).value()
}

export default paginate