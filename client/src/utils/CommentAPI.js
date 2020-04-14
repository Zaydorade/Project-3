import axios from 'axios';

export default {
	getComment: () => {
		return axios.get('/api/comment');
    },
    createComment: data => {
        return axios.Comment('/api/comment/', data)
    },
    deleteComment: data => {
        return axios.Comment('/api/comment/delete', data)
    }
	
};