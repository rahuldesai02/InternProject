import React from 'react';
import '../css/form.css';

export class Form extends React.Component{
  constructor(props)
  {
    super(props);
    // this.state = {action : "Submit",submitted : false};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick()
  {
    // const newaction = this.state.action === "Submit" ? "Reset" : "Submit";
    // if(newaction === "Submit")
    // this.setState({action : newaction,submitted : false});
    // else
    // this.setState({action : newaction,submitted : false});
  }
  render()
  {
    return(
      <div className = "container">
        <form>
           <input id = "number" type="number" className="form-control form-control-sm" placeholder = "NUMBER" required/>
          <select id = "select" className="form-control form-control-sm" required>
          <option></option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          </select>
          <input id = "secondnumber" type="number" className="form-control form-control-sm" placeholder = "NUMBER" required/>
          <div style = {{textAlign : "center"}}>
            <button onClick = {this.handleClick} type = "submit" id = "button" className="btn btn-default">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
