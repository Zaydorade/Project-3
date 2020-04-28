import axios from 'axios';

export default {
	getUsers: () => {
		return axios.get('api/users');
    },
    getUser: () => {
        return axios.get('api/users/user')
    },
    getUserProfile: data => {
        return axios.get(`api/users/${data.username}`)
    },
    createUser: data => {
        return axios.post('api/users/', data)
    },
    deleteUser: data => {
        return axios.post('api/auth/delete', data)
    },
	getSteam: data => {
        return axios.post('api/steam', data)
    },
    updateSteamAvatar: () => {
        return axios.get(`api/steam/avatar`)
    },
    updateUser: data => {
        return axios.post(`api/users/${data.username}`, data)
    },
    updateUserfromProfile: data => {
        return axios.post(`api/users/${data.username}`, data)
    },
    updateAvatar: () => {
        return axios.get('api/avatar')
    },
    login: data => {
        return axios.post('api/auth/login', data)
    },
    logout: () => {
        return axios.get('api/auth/logout')
    }
};