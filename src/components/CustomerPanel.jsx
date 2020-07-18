import React, { Component } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
} from "mdbreact";

class CustomerPanel extends Component {
  state = {
    customerInfo: {
      id: this.props.id,
      name: this.props.name,
      email: this.props.email,
      phone: this.props.phone,
    },
  };
  render() {
    const { customerInfo } = this.state;
    const handleToUpdate = this.props.handleToUpdate;

    return (
      <MDBContainer className="no-gutters animated zoomIn">
        <MDBCard style={{ marginTop: "1rem" }}>
          <MDBCardBody>
            <MDBCardTitle>{customerInfo.name}</MDBCardTitle>
            <MDBCardTitle tag="h6" sub className="mb-2 text-muted">
              {customerInfo.email}
            </MDBCardTitle>
            <MDBCardText>{customerInfo.phone}</MDBCardText>
            <button
              type="button"
              onClick={() => handleToUpdate(customerInfo.id)}
              className="btn btn-outline-primary btn-md"
            >
              Click to view details
            </button>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    );
  }
}

export default CustomerPanel;
