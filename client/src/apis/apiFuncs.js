import axios from 'axios';
import { DB_URL } from '../config/constants';

export const signinAuthFunc = async data => {
  try {
    const response = await axios.post(DB_URL + '/account/signin', data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
