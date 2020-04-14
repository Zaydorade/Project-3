import axios from 'axios';

export default {
	getUser: () => {
		return axios.get('/api/user');
    },
    createUser: data => {
        return axios.User('/api/user/', data)
    },
    deleteUser: data => {
        return axios.User('/api/user/delete', data)
    }
	
};