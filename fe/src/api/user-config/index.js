import {
  post
} from '@/helpers/request';

export const resetPassword = (password, oldPassword) => {
  return post('/user-config/update/password', {
    password,
    oldPassword,
  })
};
