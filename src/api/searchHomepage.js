import axios from 'axios';

export const checkPersonExist = () => axios.get('/api/check/person/exist');
