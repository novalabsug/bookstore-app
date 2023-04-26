import { isAfter } from 'date-fns';

export const logoutFunc = () => {
  localStorage.setItem('bookstore', '{}');

  window.location.assign('/');
};

export const IsLoggedInFunc = () => {
  const Profile = JSON.parse(localStorage.getItem('bookstore'));

  // check if token exists and is valid
  if (Profile?.token) {
    if (!isAfter(new Date(Profile.expiresOn), new Date())) {
      localStorage.setItem('bookstore', '{}');

      window.location.assign('/');
    }
  }

  // check if token exists
  if (Profile?.token) return { status: true, Profile };

  return { status: false };
};
