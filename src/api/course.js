import axiosClient from './axiosClient';

export const getUserData = async () => {
  const userData = await axiosClient.get('users');

  return userData;
};

export const userLogin = async ({}) => {
  const userData = await axiosClient.post('users', {});

  return userData;
};
