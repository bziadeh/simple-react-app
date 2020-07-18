import React, { Component } from "react";
import axios from "axios";
import CustomerPanel from "./CustomerPanel";
import CustomerDetails from "./CustomerDetails";
import { MDBCol, MDBRow, MDBContainer } from "mdbreact";

class Customers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCustomer: 1,
    };
  }

  componentDidMount() {
    this.loadCustomers();
  }

  loadCustomers() {
    axios.get("assets/customerlist.json").then((response) => {
      this.setState({ customerList: response });
    });
  }

  handleToUpdate = (id) => {
    this.setState({ selectedCustomer: id });
  };

  render() {
    // Customer data has not been loaded from JSON yet.
    if (!this.state.customerList) {
      return "";
    }
    return (
      <center>
        <MDBContainer className="no-gutters">
          <MDBRow>
            <MDBCol md="6">
              {this.state.customerList.data.map((customer) => (
                <CustomerPanel
                  key={customer.id}
                  id={customer.id}
                  name={customer.name}
                  email={customer.email}
                  phone={customer.phone}
                  handleToUpdate={this.handleToUpdate}
                />
              ))}
            </MDBCol>
            <MDBCol md="6">
              <CustomerDetails customerId={this.state.selectedCustomer} />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </center>
    );
  }
}

export default Customers;
