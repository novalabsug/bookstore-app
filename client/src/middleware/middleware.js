import { isAfter } from 'date-fns';

export const logoutFunc = () => {
  localStorage.setItem('rallen-contractor', '{}');

  window.location.assign('/');
};

export const IsLoggedInFunc = () => {
  const Profile = JSON.parse(localStorage.getItem('rallen-contractor'));

  // check if token exists and is valid
  if (Profile?.token) {
    if (!isAfter(new Date(Profile.expiresOn), new Date())) {
      localStorage.setItem('rallen-contractor', '{}');

      window.location.assign('/');
    }
  }

  // check if token exists
  if (Profile?.token) return { status: true, Profile };

  return { status: false };
};
