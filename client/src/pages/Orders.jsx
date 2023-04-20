import { Box, Flex, Grid, Heading, Link, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { ThemeColors } from '../Themes/default';

const Orders = () => {
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
            <Link href="/order?id=2">
              <Box background={ThemeColors.baseColor} padding={'2rem 1rem'}>
                <Text fontSize={'2xl'}>Carry Underwood</Text>
                <Text fontSize={'lg'} margin={'0.5rem 0'}>
                  9 Books
                </Text>
                <Text fontSize={'lg'} margin={'0.5rem 0'}>
                  $ 2350
                </Text>
              </Box>
            </Link>
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default Orders;
