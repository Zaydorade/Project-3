import axios from 'axios';

export default {
	getUser: () => {
		return axios.get('/api/users');
    },
    createUser: data => {
        return axios.post('/api/users/', data)
    },
    deleteUser: data => {
        return axios.delete('/api/user/delete', data)
    },
	updateSteam: data => {
        return axios.post('./api/steam', data)
    }
};