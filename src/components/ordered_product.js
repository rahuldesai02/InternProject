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

        <div className="card-columns">
        <div className="card" style={{width: "14rem"}} >
          <img src={SampleImage} className="card-img-top" alt="product"/>
          <div className="card-body">
            <h5 className="card-title">Name : Product</h5>
            <p className="card-text">Price : $</p>
          </div>
        </div>
        <div className="card" style={{width: "14rem"}} >
          <img src={SampleImage} className="card-img-top" alt="product"/>
          <div className="card-body">
            <h5 className="card-title">Name : Product</h5>
            <p className="card-text">Price : $</p>
          </div>
        </div>
    </div>
    );
  }
}
