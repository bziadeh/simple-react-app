import React, { Component } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
  MDBCardHeader,
} from "mdbreact";
import axios from "axios";

class CustomerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getCustomerDetails(this.props.customerId);
  }

  getCustomerDetails(customerId) {
    axios.get(`assets/customer${customerId}.json`).then((response) => {
      this.setState({ details: response });
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.customerId !== prevProps.customerId) {
      this.getCustomerDetails(this.props.customerId);
    }
  }

  capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  render() {
    if (!this.state.details) {
      return "";
    }

    const { data } = this.state.details;
    const keys = Object.entries(data).map(([key, value]) => [
      this.capitalize(key),
      value,
    ]);

    return (
      <MDBContainer className="no-gutters">
        <MDBCard style={{ marginTop: "1rem" }}>
          <MDBCardHeader>
            <MDBCardTitle>{data.name}</MDBCardTitle>
            <MDBCardTitle tag="h6" sub className="mb-2 text-muted">
              {data.email}
            </MDBCardTitle>
          </MDBCardHeader>
          <MDBCardBody>
            {keys.map((element) => (
              <MDBCardText key={element[0]}>
                {element[0]}: {element[1]}
              </MDBCardText>
            ))}
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    );
  }
}

export default CustomerDetails;
