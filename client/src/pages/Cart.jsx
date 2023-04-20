import { Box, Button, Flex, Heading, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { ThemeColors } from '../Themes/default';
import { Books } from '../config/constants';
import CartItem from '../components/Carts/CartItem';

const Cart = () => {
  return (
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
            <Text fontSize={'3xl'}>Cart ({Books.length + 'Books'})</Text>
          </Flex>
        </Box>
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
                {Books.map((book, index) => (
                  <CartItem key={index} cartItem={book} />
                ))}
              </Box>
            </Box>
            <Box width={'20%'}>
              <Box padding={'1rem'} border={'1.8px solid #000'}>
                <Box padding={'1rem 0'}>
                  <Heading as={'h3'} size={'md'}>
                    Cart Total
                  </Heading>
                  <Text fontSize={'2xl'}>$ 2300</Text>
                </Box>
                <Box padding={'1rem 0'}>
                  <Button colorScheme="orange" padding={'2rem'} fontSize={'lg'}>
                    Checkout
                  </Button>
                </Box>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
