import { Box, Button, Flex, Input, Link, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { ThemeColors } from '../Themes/default';
import { signinAuthFunc } from '../apis/apiFuncs';
import Notification from '../components/Notifications/Notification';
import { addDays } from 'date-fns';

const Signin = () => {
  const [signinData, setSigninData] = useState({ email: '', password: '' });
  const [NotificationData, setNotificationData] = useState({
    type: '',
    status: '',
    message: '',
  });

  const handleChange = e => {
    setSigninData({ ...signinData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    signinAuthFunc(signinData)
      .then(result => {
        if (result.status == 'Success') {
          setNotificationData(
            prevState =>
              (prevState = {
                ...prevState,
                type: 'success',
                status: true,
                message: 'Signed In successfully',
              })
          );

          // store user info in local storage
          localStorage.setItem(
            'bookstore',
            JSON.stringify({
              ...result.user,
              token: result.token,
              expiresOn: addDays(new Date(), 2),
            })
          );

          // clear notification data
          clearNotification({ redirect: true });
        }

        if (result.Error) {
          setNotificationData(
            prevState =>
              (prevState = {
                ...prevState,
                type: 'error',
                status: true,
                message: result.Error.message
                  ? result.Error.message
                  : result.Error,
              })
          );
          // clear notification data
          clearNotification({ redirect: false });
        }
      })
      .catch(err => {
        setNotificationData(
          prevState =>
            (prevState = {
              ...prevState,
              type: 'error',
              status: true,
              message: 'Unexpected error occured',
            })
        );
        // clear notification data
        clearNotification({ redirect: false });
      });
  };

  function clearNotification(data) {
    setTimeout(() => {
      setNotificationData(
        prevState =>
          (prevState = { ...prevState, type: '', status: false, message: '' })
      );

      if (data.redirect) window.location.assign('/');
    }, 5000);
  }

  return (
    <>
      <Notification
        type={NotificationData.type}
        message={NotificationData.message}
        status={NotificationData.status}
      />
      <Box padding={'3rem 0 5rem 0'}>
        <Box padding={'1rem 0'}>
          <Text textAlign={'center'} fontSize={'4xl'}>
            Login
          </Text>
        </Box>
        <Box>
          <form onSubmit={handleSubmit}>
            <Box>
              <Flex>
                <Box margin={'auto'} width={'50%'}>
                  <Box padding={'0.5rem 0'}>
                    <Input
                      type="text"
                      placeholder={'Email'}
                      name={'email'}
                      onChange={handleChange}
                    />
                  </Box>
                  <Box padding={'0.5rem 0'}>
                    <Input
                      type="password"
                      placeholder={'Password'}
                      name="password"
                      onChange={handleChange}
                    />
                  </Box>
                  <Box padding={'0.5rem 0'}>
                    <Flex>
                      <Text fontSize={'lg'}>Don't have an accocunt</Text>
                      <Link href="/signup" margin={'0 0.3rem'}>
                        <Text fontSize={'lg'} color={ThemeColors.primaryColor}>
                          Sign Up
                        </Text>
                      </Link>
                    </Flex>
                  </Box>
                  <Box padding={'1rem 0'}>
                    <Button colorScheme="orange" type="submit" size={'lg'}>
                      Sign In
                    </Button>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Signin;
