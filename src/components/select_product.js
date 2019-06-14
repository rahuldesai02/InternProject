import React from 'react';
// import Card from 'react-bootstrap/Card';
// import CardColumns from 'react-bootstrap/Card';
import {Product} from './product';
import '../css/select_product.css';

export class SelectProduct extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {selected : 0};
  }
  handleChange()
  {
    // this.setState({selected : 1})
  }
  render()
  {
    return(
      <div>
      <Product onchange = {this.handleChange}/>
    <div style = {{float : "right"}}>
      <a id = "selected">Selected {this.state.selected}</a>
      <button id = "cancel">Cancel</button>
      <button id = "continue">Continue</button>
    </div>

  </div>
    );
  }
}
