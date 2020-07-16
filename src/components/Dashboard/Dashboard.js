import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {

    state = {
        name: '',
        color: '',
        breed: '',
        owner: '',
    }

    componentDidMount(){
        this.getPets();
    }

    getPets = () => {
        // this.props.dispatch({
        //     type: 'GET_PETS'
        // })
    }

    trackPet = (event, type) => {
        this.setState({
            ...this.state,
            [type]: event.target.value
        })
    }

    goToManageOwners = () => {
        console.log('in ')
        this.props.history.push('/ManageOwners')
    }

    submitPet = () => {
        this.props.dispatch({
            type: 'SUBMIT_PET',
            payload: this.state
        })
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
                    <input placeholder="Pet Name" onChange={(event)=>this.trackPet(event, 'name')}></input>
                    <input placeholder="Pet Color" onChange={(event) => this.trackPet(event, 'color')}></input>
                    <input placeholder="Pet Breed" onChange={(event) => this.trackPet(event, 'breed')}></input>
                    <select placeholder="Owner Name" onChange={(event) => this.trackPet(event, 'owner')}>
                        <option>
                           
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

                        {/* this.props.reduxState.pets.map(item) =>
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


// const mapStateToProps = reduxState => ({
//     reduxState
// });

export default Dashboard;