import React, { Component } from 'react';
import './App.css';
import UserAPI from './utils/UserAPI';
import CreateNewUser from './components/createUser'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
      username: '',
      password: '',
			users: [],
			posts: [],
			comments: []
		};
	}

	componentDidMount() {
		this.getUsers();
	}

	render() {
		return (
			<div className="container">
				<div>
					<h1 className="text-center">Gamer's Social Network</h1>
          <CreateNewUser />
				</div>
			</div>
		);
	}

	//============================== Universal Functions ==========================================================

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
				this.getUsers();
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
}

export default App;
