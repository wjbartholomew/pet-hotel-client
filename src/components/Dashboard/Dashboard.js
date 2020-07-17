import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component {
  state = {
    name: "",
    color: "",
    breed: "",
    owner: "",
  };

  componentDidMount() {
    this.getPets();
  }

  getPets = () => {
    this.props.dispatch({
      type: "GET_PETS",
    });
  };

  trackPet = (event, type) => {
    this.setState({
      ...this.state,
      [type]: event.target.value,
    });
    console.log(this.state);
  };

  goToManageOwners = () => {
    this.props.history.push("/ManageOwners");
  };

  submitPet = () => {
    this.props.dispatch({
      type: "SUBMIT_PET",
      payload: this.state,
    });
  };

  render() {
    return (
      <div>
        <h1>Pet Hotel</h1>
        <div>
          <h3>Dashboard</h3>
          <p onClick={this.goToManageOwners}>Manage Owners</p>
        </div>
        <h2>Add Pet</h2>

        <div>
          <input
            placeholder="Pet Name"
            onChange={(event) => this.trackPet(event, "name")}
          ></input>
          <input
            placeholder="Pet Color"
            onChange={(event) => this.trackPet(event, "color")}
          ></input>
          <input
            placeholder="Pet Breed"
            onChange={(event) => this.trackPet(event, "breed")}
          ></input>
          <select
            placeholder="Owner Name"
            // onChange={(event) => this.handleOwnerSelect(event)}
            onChange={(event) => this.trackPet(event, "owner")}
          >
            {this.props.reduxState.owners.map((owner) => {
              return <option value={owner.key}>{owner.firstName}</option>;
            })}
          </select>
          <button onClick={this.submitPet}>Submit</button>
        </div>

        <h2>History</h2>
        <div>
          <table>
            <thead>
              <tr>
                <th>Owner</th>
                <th>Pet</th>
                <th>Breed</th>
                <th>Color</th>
                <th>Checked In</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.props.reduxState.pets.map((item) => {
                return (
                  <tr>
                    <td>{item.owner}</td>
                    <td>{item.name}</td>
                    <td>{item.breed}</td>
                    <td>{item.color}</td>
                    <td>{item.is_checked_in}</td>

                    {item.checked === true ? (
                      <td>
                        <button
                          value={item.id}
                          onClick={(event) => this.deletePet(event)}
                        >
                          Delete
                        </button>
                        /
                        <button
                          value={item.id}
                          onClick={(event) => this.checkOut(event)}
                        >
                          Check Out
                        </button>
                      </td>
                    ) : (
                      <td>
                        <button
                          value={item.id}
                          onClick={(event) => this.deletePet(event)}
                        >
                          Delete
                        </button>
                        /
                        <button
                          value={item.id}
                          onClick={(event) => this.checkIn(event)}
                        >
                          Check In
                        </button>
                      </td>
                    )}
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

export default connect(mapStateToProps)(Dashboard);
