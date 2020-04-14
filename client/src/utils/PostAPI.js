import axios from 'axios';

export default {
	getPost: () => {
		return axios.get('/api/post');
    },
    createPost: data => {
        return axios.post('/api/post/', data)
    },
    deletePost: data => {
        return axios.post('/api/post/delete', data)
    }
	
};