import React from 'react';
// import Card from 'react-bootstrap/Card';
// import CardColumns from 'react-bootstrap/Card';
import SampleImage from '../images/DummyOrderedProduct.jpeg';
import '../css/select_product.css';

export class SelectProduct extends React.Component
{
  render()
  {
    return(
      <div>
        <div class="card-columns">
        <div class="card" style={{width: "14rem"}} >

          <div >
            <label id  = "img">
              <input id = "img" type = "checkbox"/>
              <img src={SampleImage} className="card-img-top" alt="product image"/></label>
          </div>

          <div class="card-body">
            <h5 class="card-title">Name : Product</h5>
            <p class="card-text">Price : $</p>
          </div>
        </div>
        <div class="card" style={{width: "14rem"}} >
          <div >
            <label id  = "img">
              <input id = "img" type = "checkbox"/>
              <img src={SampleImage} className="card-img-top" alt="product image"/></label>
          </div>

          <div class="card-body">
            <h5 class="card-title">Name : Product</h5>
            <p class="card-text">Price : $</p>
          </div>
        </div>
    </div>
    <div style = {{float : "right"}}>
      <a id  = "selected">Selected 0</a>
      <button id = "cancel">Cancel</button>
      <button id = "continue">Continue</button>
    </div>

  </div>
    );
  }
}
