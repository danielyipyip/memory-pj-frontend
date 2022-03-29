import axios from 'axios';

url='http://localhost:5000/'

export const fetchPost = () => {axios.get(url)}
export const createPost = (data) => {axios.post(url, data)}