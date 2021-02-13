import axios from 'axios';
import {
  del, post, get
} from '@/helpers/request';

export const add = (form) => {
  return axios.post(
    'http://localhost:3000/good/add',
    form,
  );
};

export const list = (data) => {
  return axios.get(
    'http://localhost:3000/good/list',
    {
      params: data,
    },
  );
};

export const remove = (id) => {
  return axios.delete(
    `http://localhost:3000/good/${id}`,
  );
};

export const updateCount = (data = {}) => {
  return axios.post(
    `http://localhost:3000/good/update/count`,
    data,
  );
};

export const update = (data = {}) => {
  return axios.post(
    `http://localhost:3000/good/update`,
    data,
  );
};

export const detail = (id) => {
  return get(
    `/good/detail/${id}`,
  );
};
