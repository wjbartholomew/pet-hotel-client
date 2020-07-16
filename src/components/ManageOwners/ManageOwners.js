import React, { Component } from 'react';
import { connect } from 'react-redux';

class ManageOwners extends Component {

    state = {
        owner: ''
    }

    componentDidMount(){
        this.getOwners()
    }

    getOwners = () => {
        // this.props.dispatch({
        //     type: 'GET_OWNERS'
        // })
    }

    trackName = (event) => {
        this.setState({
            owner: event.target.value
        })
    }

    submitOwner= () => {
        this.props.dispatch({
            type:'SUBMIT_OWNER',
            payload: this.state
        })
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
                <h2>Add Owner</h2>
                <div>
                    <input onChange={(event)=>this.trackName(event)}placeholder="Owner Name"></input>
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


                        {/*this.props.reduxState.owners.map(item) =>
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