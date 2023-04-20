import {
  Box,
  Grid,
  Stack,
  Link,
  Text,
  Flex,
  Heading,
  Spacer,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { Books } from '../config/constants';
import Book from '../components/Books/Book';

const Dashboard = () => {
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
            <Flex>
              <Heading as={'h3'} size={'md'}>
                All Books
              </Heading>
              <Spacer />
              <Box>
                <Button
                  background={'none'}
                  padding={'1rem'}
                  border={'1.8px solid #dbdbdb'}
                  fontSize={'lg'}
                >
                  Add Book
                </Button>
              </Box>
            </Flex>
          </Box>
          <Grid
            gridTemplateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(3, 1fr)',
              xl: 'repeat(5, 1fr)',
            }}
            gridGap="1rem"
            padding={'0 2rem'}
          >
            {Books.map((book, index) => (
              <Book key={index} book={book} />
            ))}
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default Dashboard;
