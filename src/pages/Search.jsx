import { Box, Flex, Grid, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { ThemeColors } from '../Themes/default';
import { Books } from '../config/constants';
import Book from '../components/Books/Book';
import { useSearchParams } from 'react-router-dom';
import { fetchBookSearchFunc } from '../apis/apiFuncs';

const Search = () => {
  const [Books, setBooks] = useState([]);
  const [searchParam] = useSearchParams();
  const searchParamValue = searchParam.get('search');

  useEffect(() => {
    fetchBookSearchFunc(searchParamValue).then(result => {
      setBooks(result.Books);
    });
  }, []);

  return (
    <Box padding={{ base: '2rem 1rem', md: '2rem', xl: '1rem 3rem 3rem 3rem' }}>
      <Box padding={'1rem 0'}>
        <Flex flexDirection={{ base: 'column', md: 'column', xl: 'row' }}>
          <Text fontSize={'3xl'}>Showing results for: </Text>
          <Text fontSize={'3xl'} color={ThemeColors.primaryColor}>
            {searchParamValue}
          </Text>
        </Flex>
      </Box>
      <Box padding={'1rem 0'}>
        {Books ? (
          Books.length > 0 ? (
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
          ) : (
            <Box padding={'2rem 0'}>
              <Text fontSize={'2xl'} textAlign={'center'}>
                No books found
              </Text>
            </Box>
          )
        ) : (
          <Box padding={'2rem 0'}>
            <Text fontSize={'2xl'} textAlign={'center'}>
              No books found
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Search;
