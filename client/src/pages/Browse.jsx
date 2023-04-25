import { Box, Flex, Stack, Text, Link, Heading, Grid } from '@chakra-ui/react';
import React from 'react';
import { ThemeColors } from '../Themes/default';
import Book from '../components/Books/Book';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchBooksFunc } from '../apis/apiFuncs';
import { Genres } from '../config/constants';

const Browse = () => {
  const [Books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooksFunc()
      .then(result => {
        if (result.status == 'Success') {
          setBooks(result.Books);
        }
      })
      .catch(err => {});
  }, []);

  return (
    <>
      <Box>
        <Box padding={'2rem 3rem'}>
          <Flex>
            <Box padding={'1rem'} border={'1.8px solid #000'} width={'20%'}>
              <Box padding={'1rem 0'}>
                <Heading as={'h3'} size={'md'}>
                  All Categories
                </Heading>
              </Box>
              <Stack>
                {Genres.map((genre, index) => (
                  <Link key={index} href={'/search?search=' + genre.value}>
                    <Text
                      fontSize={'md'}
                      _hover={{ color: ThemeColors.primaryColor }}
                      margin={'0 1rem 0 0'}
                    >
                      {genre.label}
                    </Text>
                  </Link>
                ))}
              </Stack>
            </Box>
            <Box width={'80%'}>
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
      </Box>
    </>
  );
};

export default Browse;
