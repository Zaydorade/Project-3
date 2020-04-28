import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import UserAPI from './utils/UserAPI';
import Profile from './components/Profile';
import Account from './components/Account';
import GsnNavbar from './components/GsnNavbar';
import Footer from './components/Footer';
import CreateUser from './components/SignUp';
import SignIn from './components/SignIn';
import Browse from './components/Browse';
import About from './components/About';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			username: "",
			password: "",
			password2: "",
			_id: "",
			bio: "",
			avatar: "",
			region: "",
			micUser: "",
			steamID: "",
			xboxgt: "",
			riotID: "",
			psn: "",
			ninID: "",
			twitchID: "",
			style: "",
			availability: "",
			platform: "",
			platforms: [],
			favGenre: "",
			voiceRecord: "",
			profile: "",
			friends: [],
			userProfile: {},
			regionSearch: ["Americas", "Europe/Asia", "Oceania"],
			platformSearch: ["PC", "Xbox", "Playstation", "Nintendo Switch", "Mobile"],
			styleSearch: ["Social", "Casual", "Competitive"],
			file: null,
			userLoggedIn: false
		};
	}


	componentDidMount() {
		let theURL = window.location.href
		if (theURL.match(/profile/)) {
			let currentProfile = localStorage.getItem("currentprofile")
			this.setState({
				profile: currentProfile
			})
			this.getProfile(currentProfile)
			this.getUser()
		}
		else {
			this.getUser()
			this.getUsers()
		}
	}

	render() {

		return (
			<Router>
				<div>
					<GsnNavbar username={this.state.username} logout={this.logout} />
					<Route exact path='/' render={(props) =>
						<Browse {...props} value={this.state} handleDropdown={this.onHandleDropdown}
							handleChange={this.onHandleChange} viewProfile={this.viewProfile} addFriend={this.addFriend} />} />
					<Route path="/profile" render={(props) =>
						<Profile {...props} value={this.state} addFriend={this.addFriendfromProfile} viewProfile={this.viewProfile} />} />
					<Route exact path="/account" render={(props) =>
						<Account {...props} handleChange={this.onHandleChange} updateAvatar={this.updateAvatar}
							imageSelect={this.onImageSelect} value={this.state} updateUser={this.updateUser} updatePassword={this.updatePassword}
							updateSteam={this.updateSteam} submitDelete={this.deleteUser} updatePSN={this.updatePSN}
							updateXbox={this.updateXbox} updateRiot={this.updateRiot} updateNin={this.updateNin}
							handleMultiChange={this.onMultiFormChange} addFriend={this.addFriend} viewProfile={this.viewProfile} />} />
					<Route exact path="/signup" render={(props) =>
						<CreateUser {...props} handleChange={this.onHandleChange} handleMultiChange={this.onMultiFormChange}
							value={this.state} submitClick={this.createUser} />} />
					<Route exact path='/login' render={(props) =>
						<SignIn {...props} handleChange={this.onHandleChange} value={this.state} submitClick={this.login} />} />
					<Route exact path='/about' component={About} />
					<Footer />
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
		})
	};

	onHandleDropdown = (event) => {
		const { name, textContent } = event.target;
		var searchArray = []
		if (name === 'regionSearch') {
			searchArray = this.state.regionSearch
		}
		else if (name === 'styleSearch') {
			searchArray = this.state.styleSearch
		}
		else if (name === 'platformSearch') {
			searchArray = this.state.platformSearch
		}
		if (searchArray.includes(textContent)) {
			searchArray = searchArray.filter(item => item !== textContent)
		}
		else {
			searchArray.push(textContent)
		}
		const browseDelay = () => {
			this.setState({
				[name]: searchArray
			})
		}
		setTimeout(browseDelay, 500)
	};


	onMultiFormChange = (event) => {
		const { name, selectedOptions } = event.target;
		const stateValue = Array.from(selectedOptions, (item) => item.value)
		this.setState({
			[name]: stateValue
		})
	};

	onImageSelect = (event) => {
		this.setState({
			file: URL.createObjectURL(event.target.files[0]),
		})
	}

	//============================== User Functions ==========================================

	getUser = () => {
		UserAPI.getUser()
			.then((res) => {
				console.log(res.data)
				this.setState(res.data)
			})
			.catch((err) => console.log("500: Not logged in!"));
	};

	getUsers = () => {
		UserAPI.getUsers()
			.then((res) => {
				this.setState({ users: res.data });
			})
			.catch((err) => console.log(err));
	};

	getProfile = (user) => {
		console.log(user)
		const object = {
			username: user
		}
		UserAPI.getUserProfile(object)
			.then((res) => {
				this.setState({
					userProfile: res.data
				})
			})
			.catch((err) => console.log(err))

	}

	viewProfile = (user) => {
		localStorage.clear();
		localStorage.setItem("currentprofile", user)
		window.location = '/profile'
	}
	
	login = () => {
		const { username, password } = this.state;
		const object = {
			username,
			password
		};

		UserAPI.login(object)
			.then((res) => {
				console.log(res.data)
				this.setState({
					userLoggedIn: true
				})
				window.location = res.data.redirectURL
			})
			.catch((err) => console.log(err))
	}

	logout = () => {
		UserAPI.logout()
		.then(res => {
			console.log("logged out");
			this.setState({
				userLoggedIn: false
			})
			window.location.reload()
		})
		.catch(err => console.log(err))
	}

	//create User Function
	createUser = () => {
		const { username,
			password,
			password2,
			platform,
			platforms,
			bio,
			region,
			availability,
			micUser,
			style,
			steamID,
			xboxgt,
			riotID,
			psn,
			ninID
		} = this.state;
		const object = {
			username,
			password,
			password2,
			platform,
			platforms,
			bio,
			region,
			availability,
			micUser,
			style,
			steamID,
			xboxgt,
			riotID,
			psn,
			ninID
		};
		UserAPI.createUser(object)
			.then((res) => {
				console.log(res.data)
				if (res.data.errors) {
					alert(res.data.errors.join(`\n`))
					return null
				}
				alert(res.data.username + ' added')
				this.setState({
					username: '',
					password: '',
				});
				window.location = "/login"
			})
			.catch((err) => console.log(err));
	};

	updateAvatar = (event) => {
		UserAPI.updateAvatar()
			.then(res => {
				console.log(res)
			}
			)
			.catch(err => console.log(err))
	}

	updatePSN = () => {
		console.log(this.state)
		const { psn, username } = this.state
		const object = {
			username,
			psn
		}
		console.log(object)
		UserAPI.updateUser(object)
			.then((res) => {
				console.log(res.data.username)
				window.location.reload()
			})
			.catch((err) => console.log(err));
	};

	updateXbox = () => {
		console.log(this.state)
		const { xboxgt, username } = this.state
		const object = {
			username,
			xboxgt
		}
		console.log(object)
		UserAPI.updateUser(object)
			.then((res) => {
				console.log(res.data)
				window.location.reload()
			})
			.catch((err) => console.log(err));
	};


	updateSteam = () => {
		const { steamID, username } = this.state
		const object = {
			username,
			steamID
		}
		UserAPI.updateUser(object)
			.then((res) => {
				console.log(res.data)
				this.getSteamInfo()
				window.location.reload()
			})
			.catch((err) => console.log(err));
	};

	updateNin = () => {
		console.log(this.state)
		const { ninID, username } = this.state
		const object = {
			username,
			ninID
		}
		console.log(object)
		UserAPI.updateUser(object)
			.then((res) => {
				console.log(res.data)
				window.location.reload()
			})
			.catch((err) => console.log(err));
	};


	updateRiot = () => {
		console.log(this.state)
		const { riotID, username } = this.state
		const object = {
			username,
			riotID
		}
		console.log(object)
		UserAPI.updateUser(object)
			.then((res) => {
				console.log(res.data.username)
				window.location.reload()
			})
			.catch((err) => console.log(err));
	};


	updateTwitch = () => {
		console.log(this.state)
		const { twitchID, username } = this.state
		const object = {
			username,
			twitchID
		}
		console.log(object)
		UserAPI.updateUser(object)
			.then((res) => {
				console.log(res.data.username)
				window.location.reload()
			})
			.catch((err) => console.log(err));
	};

	updateUser = () => {
		const { username, bio, region, micUser, style, availability, platform, platforms } = this.state
		const object = {
			username,
			bio,
			region,
			micUser,
			style,
			availability,
			platform,
			platforms
		}
		console.log(object)
		UserAPI.updateUser(object)
			.then((res) => {
				window.location.reload()
			})
			.catch((err) => console.log(err));
	}

	updatePassword = () => {
		const { username, password, password2 } = this.state
		const object = {username, password, password2}
		UserAPI.updateUser(object)
		.then((res) => {
			window.location.reload()
			console.log(res)
		})
		.catch((err) => console.log(err))
	}

	getSteamInfo = () => {
		const { username, steamID } = this.state
		const object = {
			username,
			steamID
		}
		UserAPI.getSteam(object)
		.then((res) => {
			console.log('Steam info Updated')
			console.log(this.state)
			console.log(res)
			// this.updateSteamAvatar()
			// console.log('steam avatar updated')
		})
		.catch(err => console.log(err))
	}

	updateSteamAvatar = () => {
		UserAPI.updateSteamAvatar()
		.then(res => console.log(res.data))
		.catch(err => console.log(err))
	}

	addFriend = (event) => {
		const { name } = event.target
		const { username } = this.state
		const object = {
			username,
			newFriend: name
		}
		UserAPI.updateUser(object)
			.then((res) => {
				console.log(res.data.username)
				window.location.reload()
			})
			.catch((err) => console.log(err))
	}

	addFriendfromProfile = (event) => {
		const { name } = event.target
		const { username } = this.state
		const object = {
			username,
			newFriend: name
		}
		UserAPI.updateUserfromProfile(object)
			.then((res) => {
				console.log(res.data.username)
				window.location.reload()
			})
			.catch((err) => console.log(err))
	}

	deleteUser = () => {
		const { username } = this.state
		const object = {
			username
		}
		UserAPI.deleteUser(object)
			.then((res) => {
				console.log(res.data.result)
				this.logout();
				alert(`You're really all outta bubblegum, now.`)
				// --------FUTURE------- Get random VG quotes to say gbye
				window.location.reload()
			})
			.catch((err) => console.log(err));
	};


}

export default App;
