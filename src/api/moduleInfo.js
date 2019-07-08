import axios from 'axios';

export const getMouduleInfo = () => axios.get('/api/common/moduleInfo');
