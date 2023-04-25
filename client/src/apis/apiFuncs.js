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

export const signupAuthFunc = async data => {
  try {
    const response = await axios.post(DB_URL + '/account/signup', data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const newBookFunc = async data => {
  try {
    const response = await axios.post(DB_URL + '/data/book/new', data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const fetchBooksFunc = async () => {
  try {
    const response = await axios.get(DB_URL + '/data/books');
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const fetchBookFunc = async data => {
  try {
    const response = await axios.get(DB_URL + '/data/book/' + data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteBookFunc = async data => {
  try {
    const response = await axios.delete(DB_URL + '/data/book/' + data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const fetchBookSearchFunc = async data => {
  try {
    const response = await axios.get(DB_URL + '/data/book/search/' + data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const fetchCartFunc = async data => {
  try {
    const response = await axios.get(DB_URL + '/data/cart/' + data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const newCartFunc = async data => {
  try {
    const response = await axios.post(DB_URL + '/data/cart/new', data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteCartFunc = async data => {
  try {
    const response = await axios.delete(DB_URL + '/data/cart/delete/' + data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const checkoutFunc = async data => {
  try {
    const response = await axios.post(DB_URL + '/data/checkout/', data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const fetchCheckoutsFunc = async () => {
  try {
    const response = await axios.get(DB_URL + '/data/checkouts/');
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const fetchCheckoutFunc = async data => {
  try {
    const response = await axios.get(DB_URL + '/data/checkout/' + data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
