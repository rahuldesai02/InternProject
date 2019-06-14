import React from 'react';
import SampleImage from '../images/DummyOrderedProduct.jpeg';
export class Product extends React.Component{

  render()
  {
    return(
    <div className="card-columns">
    <div className="card" style={{width: "14rem"}} >
      <div >
        <label id  = "img">
          <input id = "img" type = "checkbox"/>
          <img src={SampleImage} className="card-img-top" alt="product"/></label>
      </div>

      <div className="card-body">
        <h5 className="card-title">Name : Product</h5>
        <p className="card-text">Price : $</p>
      </div>
    </div>
    <div className="card" style={{width: "14rem"}} >
      <div >
        <label id  = "img">
          <input id = "img" type = "checkbox"/>
          <img src={SampleImage} className="card-img-top" alt="product"/></label>
      </div>

      <div className="card-body">
        <h5 className="card-title">Name : Product</h5>
        <p className="card-text">Price : $</p>
      </div>
    </div>
</div>
);
  }
}
