import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tabs';
import {OrderedProduct} from './ordered_product';
import {OrderProduct} from './order_product';

export class MainTab extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: 'Ordered Products',
    };
  }

  render() {
    return (
      <Tabs
        id="controlled-tab"
        activeKey={this.state.key}
        onSelect={key => this.setState({ key })}
      >
        <Tab eventKey="Ordered Products" title="Ordered Products" >
          <p></p>
            <OrderedProduct />
        </Tab>
        <Tab eventKey="Order Product" title="Order Product">
          <p></p>
            <OrderProduct />
        </Tab>
        {/* <Tab eventKey="contact" title="Contact" disabled>
        </Tab> */}
      </Tabs>
    );
  }
}
