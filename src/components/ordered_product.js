import React from 'react';
// import Card from 'react-bootstrap/Card';
// import CardColumns from 'react-bootstrap/Card';
import SampleImage from '../images/DummyOrderedProduct.jpeg';
// import '../css/ordered_products.css';

export class OrderedProduct extends React.Component
{
  render()
  {
    return(

        <div class="card-columns">
        <div class="card" style={{width: "14rem"}} >
          <img src={SampleImage} className="card-img-top" alt="product image"/>
          <div class="card-body">
            <h5 class="card-title">Name : Product</h5>
            <p class="card-text">Price : $</p>
          </div>
        </div>
        <div class="card" style={{width: "14rem"}} >
          <img src={SampleImage} className="card-img-top" alt="product image"/>
          <div class="card-body">
            <h5 class="card-title">Name : Product</h5>
            <p class="card-text">Price : $</p>
          </div>
        </div>
    </div>
    );
  }
}
