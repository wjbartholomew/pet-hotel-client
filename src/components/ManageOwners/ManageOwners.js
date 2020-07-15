import React, { Component } from 'react';
import { connect } from 'react-redux';

class ManageOwners extends Component {

    componentDidMount(){
        this.getOwners()
    }

    getOwners = () => {
        // this.props.dispatch({
        //     type: 'GET_OWNERS'
        // })
    }


    goToDashboard = () => {
        console.log('in ')
        this.props.history.push('/')
    }


    render() {
        return (
            <div>
                <h1>Pet Hotel</h1>
                <div>
                    <p onClick={this.goToDashboard}>Dashboard</p>
                    <h3>Manage Owners</h3>
                </div>
                <h2>Add Pet</h2>
                <div>
                    <input placeholder="Owner Name"></input>
                    <button onClick={this.submitOwner}>Submit</button>
                </div>
                <h2>Owners</h2>
                <div>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Number of Pets</th>
                            <th>Actions</th>
                            <th>Color</th>
                        </tr>


                        {/* map =>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.numberOfPets}</td>
                            <td>{item.Actions}</td>
                            <td>{item.Color}</td>
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

export default ManageOwners;