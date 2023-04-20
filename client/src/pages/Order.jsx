import { Box, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Books } from '../config/constants';
import CartItem from '../components/Carts/CartItem';
import OrderItem from '../components/Orders/OrderItem';

const Order = () => {
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
          <Box>
            <Heading as={'h3'} size={'md'}>
              Client
            </Heading>
            <Box padding={'1rem 0'}>
              <Text fontSize={'2xl'}>Carry Underwood</Text>
              <Text fontSize={'lg'} margin={'0.3rem 0'}>
                carryunderwood@gmail.com
              </Text>
            </Box>
          </Box>
          <Box padding={'1rem 0'}>
            <Heading as={'h3'} size={'md'}>
              Order Details
            </Heading>
            <Box padding={'0.5rem 0'}>
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
                <Box>
                  {Books.map((book, index) => (
                    <OrderItem key={index} orderItem={book} />
                  ))}
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
