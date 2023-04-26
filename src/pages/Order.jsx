import { Box, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Books } from '../config/constants';
import CartItem from '../components/Carts/CartItem';
import OrderItem from '../components/Orders/OrderItem';
import { fetchCheckoutFunc } from '../apis/apiFuncs';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

const Order = () => {
  const [searchParam] = useSearchParams();
  const ID = searchParam.get('id');

  const [Checkout, setCheckout] = useState({});

  useEffect(() => {
    fetchCheckoutFunc(ID).then(result => {
      if (result.status == 'Success') {
        setCheckout(prevState => {
          return { ...prevState, ...result.Data };
        });
      }
    });
  }, []);
  return (
    <Box padding={{ base: '2rem 1rem', md: '2rem 1rem', xl: '3rem' }}>
      <Flex>
        <Box width={'20%'} display={{ base: 'none', md: 'none', xl: 'block' }}>
          <Stack>
            <Box padding={'0.5rem 0'}>
              <Link href="/dashboard">
                <Text fontSize={'lg'}>Dashboard</Text>
              </Link>
            </Box>
            <Box padding={'0.5rem 0'}>
              <Link href="/orders">
                <Text fontSize={'lg'}>Orders</Text>
              </Link>
            </Box>
          </Stack>
        </Box>
        <Box width={{ base: '100%', md: '100%', xl: '80%' }}>
          <Box>
            <Heading as={'h3'} size={'md'}>
              Client
            </Heading>
            <Box padding={'1rem 0'}>
              <Text fontSize={'2xl'}>
                {Checkout
                  ? Checkout?.UserData
                    ? Checkout?.UserData.fullname
                    : ''
                  : ''}
              </Text>
              <Text fontSize={'lg'} margin={'0.3rem 0'}>
                {Checkout
                  ? Checkout?.UserData
                    ? Checkout?.UserData.email
                    : ''
                  : ''}
              </Text>
            </Box>
          </Box>
          <Box padding={'1rem 0'}>
            <Text fontSize={'3xl'}>
              Cart Total:{' ' + '$'}
              {Checkout
                ? Checkout?.CheckoutData
                  ? Checkout?.CheckoutData?.cartTotal
                  : ''
                : ''}
            </Text>
          </Box>
          <Box padding={'1rem 0'}>
            <Heading as={'h3'} size={'md'}>
              Order Details
            </Heading>
            <Box padding={'0.5rem 0'}>
              <Box padding={'0 0 1rem 0'}>
                <Flex display={{ base: 'none', md: 'flex', xl: 'flex' }}>
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
                <Box>
                  {Checkout
                    ? Checkout?.Books
                      ? Checkout?.Books.map((book, index) => (
                          <OrderItem
                            key={index}
                            book={book}
                            orderItem={Checkout?.CheckoutData?.cartItems}
                          />
                        ))
                      : ''
                    : ''}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Order;
