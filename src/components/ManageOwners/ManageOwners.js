import React, { Component } from "react";
import { connect } from "react-redux";

class ManageOwners extends Component {
  state = {
    firstName: "",
    lastName: "",
  };

  componentDidMount() {
    this.getOwners();
  }

  getOwners = () => {
    this.props.dispatch({
      type: "GET_OWNERS",
    });
  };

  trackFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  trackLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  submitOwner = () => {
    this.props.dispatch({
      type: "SUBMIT_OWNER",
      payload: this.state,
    });
  };

  goToDashboard = () => {
    console.log("in ");
    this.props.history.push("/");
  };

  deleteOwner = (id) => {
    console.log(id);
    this.props.dispatch({
      type: "DELETE_OWNER",
      payload: id,
    });
  };

  render() {
    return (
      <div>
        <h1>Pet Hotel</h1>
        {console.log(this.state)}
        <div>
          <p onClick={this.goToDashboard}>Dashboard</p>
          <h3>Manage Owners</h3>
        </div>
        <h2>Add Owner</h2>
        <div>
          <input
            onChange={(event) => this.trackFirstName(event)}
            placeholder="First Name"
          ></input>
          <input
            onChange={(event) => this.trackLastName(event)}
            placeholder="Last Name"
          ></input>
          <button onClick={this.submitOwner}>Submit</button>
        </div>
        <h2>Owners</h2>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Number of Pets</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.props.reduxState.owners.map((item) => {
                return (
                  <tr>
                    <td>{item.firstName}</td>
                    <td>{item.numberOfPets}</td>
                    <td>
                      <button
                        value={item.id}
                        onClick={(event) => this.deleteOwner(item.key)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapStateToProps)(ManageOwners);
