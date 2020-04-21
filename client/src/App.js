import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import UserAPI from './utils/UserAPI';
import Profile from './components/Profile';
import GsnNavbar from './components/GsnNavbar';
import CreateUser from './components/SignUp';
import SignIn from './components/SignIn';
import Browse from './components/Browse';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			username: "",
			password: ""
		};
	}

	componentDidMount() {
		this.getUsers();

	}

	render() {
		return (
			<Router>
				<div>
					<GsnNavbar />
					<Route exact path="/" component={Profile} />
					<Route exact path="/signup" render={(props) => 
					<CreateUser {...props} handleChange={this.onHandleChange} value={this.state} submitClick={this.createUser} />} />
					<Route exact path='/login' render={(props) => 
					<SignIn {...props} handleChange={this.onHandleChange} value={this.state} submitClick={this.updateSteam} />} />
					<Route exact path='/browse' render={(props) => 
					<Browse {...props} users={this.state.users}/>} />
				</div>
			</Router>
		);
	}


	//============================== Universal Functions ===================================
	//getting input boxes to add item
	onHandleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};


	//============================== User Functions ==========================================

	//getting all users from Database
	getUsers = () => {
		UserAPI.getUser()
			.then((res) => {
				this.setState({ users: res.data });
			})
			.catch((err) => console.log(err));
	};

	//create User Function
	createUser = () => {
		const { username, password } = this.state;
		const object = {
			username,
			password
		};
		UserAPI.createUser(object)
			.then((res) => {
				alert(`${res.data.username} has been added`);
				this.setState({
					username: '',
					password: '',
				});
				this.getUsers();
			})
			.catch((err) => console.log(err));
	};

	// Update user Functions
	updateSteam = () => {

		UserAPI.updateSteam({ username: "Zaydorade" })
			.then((res) => {
				alert(`${res.data.username} has been updated`);
			})
			.catch((err) => console.log(err));
	}
}

export default App;
