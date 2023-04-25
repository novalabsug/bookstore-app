import { Box, Button, Flex, Heading, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { ThemeColors } from '../Themes/default';
import { Books, Profile } from '../config/constants';
import CartItem from '../components/Carts/CartItem';
import { useState } from 'react';
import { useEffect } from 'react';
import { checkoutFunc, fetchCartFunc } from '../apis/apiFuncs';
import Notification from '../components/Notifications/Notification';

const Cart = () => {
  const [Cart, setCart] = useState([]);
  const [CartTotalData, setCartTotalData] = useState(0);
  const [NotificationData, setNotificationData] = useState({
    type: '',
    status: '',
    message: '',
  });

  useEffect(() => {
    fetchCartFunc(Profile?.id).then(result => {
      if (result.status == 'Success') {
        setCart(result.Cart);
      }
    });
  }, []);

  const calcTotalFunc = price => {
    setCartTotalData(prevState => prevState + price);
  };

  const handleCheckout = e => {
    e.preventDefault();

    const CartItems = [];

    const Inputs = [...e.target.querySelectorAll('input')];

    for (const input of Inputs) {
      CartItems.push({
        cartItemId: input.getAttribute('data-id'),
        book: input.getAttribute('data-book'),
        copies: input.value,
      });
    }

    checkoutFunc({ CartItems, CartTotalData, user: Profile?.id })
      .then(result => {
        if (result.status == 'Success') {
          setNotificationData(
            prevState =>
              (prevState = {
                ...prevState,
                type: 'success',
                status: true,
                message: 'Your order has been placed',
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
    }, 3000);
  }

  return (
    <>
      <Notification
        type={NotificationData.type}
        message={NotificationData.message}
        status={NotificationData.status}
      />
      <Box>
        <Box padding={'1rem 3rem 3rem 3rem'}>
          <Box padding={'1rem 0'}>
            <Flex>
              <Box padding={'0.5rem'}>
                <FiShoppingBag
                  size={35}
                  _hover={{ color: ThemeColors.primaryColor }}
                />
              </Box>
              <Text fontSize={'3xl'}>
                Cart (
                {Cart.length +
                  (Cart.length > 1
                    ? 'Books'
                    : Cart.length < 1
                    ? 'Books'
                    : 'Book')}
                )
              </Text>
            </Flex>
          </Box>
          <form onSubmit={handleCheckout}>
            <Box>
              <Flex>
                <Box width={'80%'} padding={'1rem'}>
                  {/* // heading */}
                  <Box padding={'0 0 1rem 0'}>
                    <Flex>
                      <Box width={'50%'}>
                        <Heading as={'h3'} size={'md'}>
                          Books
                        </Heading>
                      </Box>
                      <Box width={'30%'}>
                        <Heading as={'h3'} size={'md'}>
                          Copies
                        </Heading>
                      </Box>
                      <Box width={'20%'}>
                        <Heading as={'h3'} size={'md'}>
                          Total
                        </Heading>
                      </Box>
                    </Flex>
                  </Box>
                  {/* // content */}
                  <Box>
                    {Cart ? (
                      Cart?.length > 0 ? (
                        Cart?.map((book, index) => (
                          <CartItem
                            key={index}
                            cartItem={book}
                            calcTotalFunc={calcTotalFunc}
                          />
                        ))
                      ) : (
                        <Box padding={'2rem 0'}>
                          <Text fontSize={'2xl'} textAlign={'center'}>
                            No cart items
                          </Text>
                        </Box>
                      )
                    ) : (
                      <Box padding={'2rem 0'}>
                        <Text fontSize={'2xl'} textAlign={'center'}>
                          No cart items
                        </Text>
                      </Box>
                    )}
                  </Box>
                </Box>
                <Box width={'20%'}>
                  <Box padding={'1rem'} border={'1.8px solid #000'}>
                    <Box padding={'1rem 0'}>
                      <Heading as={'h3'} size={'md'}>
                        Cart Total
                      </Heading>
                      <Text fontSize={'2xl'}>$ {CartTotalData}</Text>
                    </Box>
                    {Cart ? (
                      Cart.length > 0 ? (
                        <Box padding={'1rem 0'}>
                          <Button
                            colorScheme="orange"
                            type="submit"
                            padding={'2rem'}
                            fontSize={'lg'}
                          >
                            Checkout
                          </Button>
                        </Box>
                      ) : (
                        ''
                      )
                    ) : (
                      ''
                    )}
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

export default Cart;
