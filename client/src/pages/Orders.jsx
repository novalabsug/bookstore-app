import { Box, Flex, Grid, Heading, Link, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { ThemeColors } from '../Themes/default';
import { fetchCheckoutFunc, fetchCheckoutsFunc } from '../apis/apiFuncs';

const Orders = () => {
  const [Checkout, setCheckout] = useState([]);

  useEffect(() => {
    fetchCheckoutsFunc().then(result => {
      if (result.status == 'Success') {
        setCheckout(result.CheckoutsData);
      }
    });
  }, []);

  return (
    <Box padding={'3rem'}>
      <Flex>
        <Box width={'20%'}>
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
        <Box width={'80%'}>
          <Box padding={'1rem 0'}>
            <Heading as={'h3'} size={'md'}>
              All Orders
            </Heading>
          </Box>

          <Grid
            gridTemplateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(3, 1fr)',
              xl: 'repeat(4, 1fr)',
            }}
            gridGap="1rem"
          >
            {Checkout ? (
              Checkout.length > 0 ? (
                Checkout.map((checkout, index) => (
                  <Link key={index} href={'/order?id=' + checkout._id}>
                    <Box
                      background={ThemeColors.baseColor}
                      padding={'2rem 1rem'}
                    >
                      <Text fontSize={'2xl'}>{checkout.user}</Text>
                      <Text fontSize={'lg'} margin={'0.5rem 0'}>
                        {checkout.cartItems.length +
                          (checkout.cartItems.length > 0
                            ? 'Books'
                            : checkout.cartItems.length < 1
                            ? 'Books'
                            : 'Book')}
                      </Text>
                      <Text fontSize={'lg'} margin={'0.5rem 0'}>
                        $ {checkout.cartTotal}
                      </Text>
                    </Box>
                  </Link>
                ))
              ) : (
                <Box padding={'2rem 0'}>
                  <Text textAlign={'center'} fontSize={'2xl'}>
                    No orders placed yet
                  </Text>
                </Box>
              )
            ) : (
              <Box padding={'2rem 0'}>
                <Text textAlign={'center'} fontSize={'2xl'}>
                  No orders placed yet
                </Text>
              </Box>
            )}
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default Orders;
