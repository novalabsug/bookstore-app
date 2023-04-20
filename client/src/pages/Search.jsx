import { Box, Flex, Grid, Text } from '@chakra-ui/react';
import React from 'react';
import { ThemeColors } from '../Themes/default';
import { Books } from '../config/constants';
import Book from '../components/Books/Book';

const Search = () => {
  return (
    <Box padding={'1rem 3rem 3rem 3rem'}>
      <Box padding={'1rem 0'}>
        <Flex>
          <Text fontSize={'3xl'}>Showing results for: </Text>
          <Text fontSize={'3xl'} color={ThemeColors.primaryColor}>
            {' '}
            Today Books
          </Text>
        </Flex>
      </Box>
      <Box padding={'1rem 0'}>
        <Grid
          gridTemplateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
            xl: 'repeat(5, 1fr)',
          }}
          gridGap="1rem"
        >
          {Books.map((book, index) => (
            <Book key={index} book={book} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Search;
