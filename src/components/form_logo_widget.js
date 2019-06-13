import React from 'react';
import {Form} from './form'
import logo from '../images/logo.png';

export class FormLogoWidget extends React.Component{
  render()
  {
    return(
      <div className="container">
    <div className="row">
      <div className="col">
        <Form/>
      </div>
      <div className="col">
        <img src ={logo}  alt  = "Logo"/>
      </div>
      <div  className="col">
        <h1>WIDGET</h1>
      </div>
    </div>
  </div>
    );
  }
}
