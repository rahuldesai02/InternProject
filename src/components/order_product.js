import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tabs';
import {SelectProduct} from './select_product';
import {Step2} from './step_2';
import {Step3} from './step_3';
import {FinalStep} from './final_step';

export class OrderProduct extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: 'select',
    };
  }

  render() {
    return (
      <Tabs
        id="controlled-tab"
        activeKey={this.state.key}
        onSelect={key => this.setState({ key })}
      >
        <Tab eventKey="select" title="Select Products" >
          <p></p>
          <SelectProduct />
        </Tab>
        <Tab eventKey="stepTwo" title="Step Two" >
          <Step2 />
        </Tab>
        <Tab eventKey="stepThree" title="Step Three" >
          <Step3 />
        </Tab>

        <Tab eventKey="final" title="Final" >
          <FinalStep />
        </Tab>
        {/* <Tab eventKey="contact" title="Contact" disabled>
        </Tab> */}

      </Tabs>

    );
  }
}
