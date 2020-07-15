import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {


    componentDidMount(){
        this.getPets();
    }

    getPets = () => {
        // this.props.dispatch({
        //     type: 'GET_PETS'
        // })
    }

    goToManageOwners = () => {
        console.log('in ')
        this.props.history.push('/ManageOwners')
    }



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
                    <input placeholder="Pet Name"></input>
                    <input placeholder="Pet Color"></input>
                    <input placeholder="Pet Breed"></input>
                    <select placeholder="Owner Name">
                        <option>
                            Owner Name
                        </option>
                    </select>
                    <button onClick={this.submitPet}>Submit</button>
                </div>
                <h2>History</h2>
              <div>


                    <table>
                        <tr>
                            <th>Owner</th>
                            <th>Pet</th>
                            <th>Breed</th>
                            <th>Color</th>
                            <th>Checked In</th>
                            <th>Actions</th>
                        </tr>

                        {/* map =>
                        <tr>
                            <td>{item.owner}</td>
                            <td>{item.pet}</td>
                            <td>{item.breed}</td>
                            <td>{item.Color}</td>
                            <td>{item.Checked}</td>
                            <td>{item=.Actions}</td>
                        </tr> */}


                    </table>
              </div>

            </div>
        );
    }
}


// const mapStateToProps = state => ({
//     state
// });

export default Dashboard;