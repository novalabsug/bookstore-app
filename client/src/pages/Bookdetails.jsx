import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { redirect, useSearchParams } from 'react-router-dom';
import { Books, DB_URL, Profile } from '../config/constants';
import { deleteBookFunc, fetchBookFunc, newCartFunc } from '../apis/apiFuncs';
import { useEffect } from 'react';
import { useState } from 'react';
import Notification from '../components/Notifications/Notification';

const Bookdetails = () => {
  const [searchParam] = useSearchParams();
  const ID = searchParam.get('id');

  const [Book, setBook] = useState({});
  const [NotificationData, setNotificationData] = useState({
    type: '',
    status: '',
    message: '',
  });

  useEffect(() => {
    fetchBookFunc(ID)
      .then(result => {
        if (result.status == 'Success') {
          setBook(result.Book);
        }
      })
      .catch(err => {});
  }, []);

  const handleAddCart = () => {
    newCartFunc({ user: Profile?.id, book: Book?._id })
      .then(result => {
        if (result.status == 'Success') {
          setNotificationData(
            prevState =>
              (prevState = {
                ...prevState,
                type: 'success',
                status: true,
                message: 'Added to cart',
              })
          );
          // clear notification data
          setTimeout(() => {
            setNotificationData(
              prevState =>
                (prevState = {
                  ...prevState,
                  type: '',
                  status: false,
                  message: '',
                })
            );
            window.location.assign('/cart');
          }, 3000);
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
          clearNotification();
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
        clearNotification();
      });
  };

  const handleDelete = () => {
    deleteBookFunc(ID)
      .then(result => {
        if (result.status == 'Success') {
          setNotificationData(
            prevState =>
              (prevState = {
                ...prevState,
                type: 'success',
                status: true,
                message: 'Book deleted',
              })
          );
          // clear notification data
          setTimeout(() => {
            setNotificationData(
              prevState =>
                (prevState = {
                  ...prevState,
                  type: '',
                  status: false,
                  message: '',
                })
            );
            window.location.assign('/dashboard');
          }, 3000);
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
          clearNotification();
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
        clearNotification();
      });
  };

  function clearNotification() {
    setTimeout(() => {
      setNotificationData(
        prevState =>
          (prevState = { ...prevState, type: '', status: false, message: '' })
      );
    }, 3000);
  }
  return (
    <>
      <Notification
        type={NotificationData.type}
        message={NotificationData.message}
        status={NotificationData.status}
      />
      <Box padding={{ base: '2rem 1rem', md: '2rem 1rem', xl: '3rem' }}>
        <Flex>
          <Box margin={'auto'} width={{ base: '100%', md: '100%', xl: '70%' }}>
            <Flex flexDirection={{ base: 'column', md: 'column', xl: 'row' }}>
              <Box width={{ base: '100%', md: '100%', xl: '40%' }}>
                <Image
                  src={Book ? DB_URL + '/' + Book?.thumbnail : ''}
                  width={'100%'}
                />
              </Box>
              <Box
                width={{ base: '100%', md: '100%', xl: '40%' }}
                padding={{ base: '0', md: '0 1rem', xl: '0 2rem' }}
              >
                <Box>
                  <Text fontSize={{ base: '3xl', md: '4xl', xl: '5xl' }}>
                    {Book?.title}
                  </Text>
                  <Box padding={'1rem 0'}>
                    {Book ? (
                      <Text fontSize={'md'} fontWeight={'bold'}>
                        {Book?.authors}
                      </Text>
                    ) : (
                      ''
                    )}
                  </Box>
                </Box>
                <Box padding={'1rem 0'}>
                  <Text fontSize={'lg'}>Categories</Text>
                  <Box padding={'0.5rem 0'}>
                    {Book
                      ? Book?.categories
                        ? Book?.categories?.map((category, index) => (
                            <Text
                              key={index}
                              fontSize={'md'}
                              fontWeight={'bold'}
                            >
                              {category}
                            </Text>
                          ))
                        : ''
                      : ''}
                  </Box>
                </Box>
                <Box>
                  <Flex>
                    <Text fontSize={'2xl'}>$ {Book ? Book?.price : ''}</Text>
                    <Box padding={'0 1rem'}>
                      {Profile?.accountType == 'admin' ? (
                        <Button
                          padding={'1rem'}
                          fontSize={'lg'}
                          colorScheme="red"
                          onClick={handleDelete}
                        >
                          Delete
                        </Button>
                      ) : (
                        <Button
                          background={'none'}
                          padding={'1rem'}
                          border={'1.8px solid #dbdbdb'}
                          fontSize={'lg'}
                          onClick={handleAddCart}
                        >
                          Add to cart
                        </Button>
                      )}
                    </Box>
                  </Flex>
                </Box>
                <Box padding={'1rem 0'}>
                  <Box padding={'1rem 0'}>
                    <Heading as={'h3'} size={'lg'}>
                      Description
                    </Heading>
                  </Box>
                  <Box>
                    <Text fontSize={'lg'}>{Book ? Book?.details : ''}</Text>
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Bookdetails;
