import { Box, Flex, Stack, Text, Link, Heading, Grid } from '@chakra-ui/react';
import React from 'react';
import { ThemeColors } from '../Themes/default';
import { Books } from '../config/constants';
import Book from '../components/Books/Book';

const Browse = () => {
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
                <Link href={'/'}>
                  <Text
                    fontSize={'md'}
                    _hover={{ color: ThemeColors.primaryColor }}
                    margin={'0 1rem 0 0'}
                  >
                    horror
                  </Text>
                </Link>
                <Link href={'/'}>
                  <Text
                    fontSize={'md'}
                    _hover={{ color: ThemeColors.primaryColor }}
                    margin={'0 1rem 0 0'}
                  >
                    mystery/crime
                  </Text>
                </Link>
                <Link href={'/'}>
                  <Text
                    fontSize={'md'}
                    _hover={{ color: ThemeColors.primaryColor }}
                    margin={'0 1rem 0 0'}
                  >
                    romance
                  </Text>
                </Link>
                <Link href={'/'}>
                  <Text
                    fontSize={'md'}
                    _hover={{ color: ThemeColors.primaryColor }}
                    margin={'0 1rem 0 0'}
                  >
                    sci-fi
                  </Text>
                </Link>
                <Link href={'/'}>
                  <Text
                    fontSize={'md'}
                    _hover={{ color: ThemeColors.primaryColor }}
                    margin={'0 1rem 0 0'}
                  >
                    thriller
                  </Text>
                </Link>
                <Link href={'/'}>
                  <Text
                    fontSize={'md'}
                    _hover={{ color: ThemeColors.primaryColor }}
                    margin={'0 1rem 0 0'}
                  >
                    hystorical
                  </Text>
                </Link>
                <Link href={'/'}>
                  <Text
                    fontSize={'md'}
                    _hover={{ color: ThemeColors.primaryColor }}
                    margin={'0 1rem 0 0'}
                  >
                    young adult
                  </Text>
                </Link>
                <Link href={'/'}>
                  <Text
                    fontSize={'md'}
                    _hover={{ color: ThemeColors.primaryColor }}
                    margin={'0 1rem 0 0'}
                  >
                    adventure
                  </Text>
                </Link>
                <Link href={'/'}>
                  <Text
                    fontSize={'md'}
                    _hover={{ color: ThemeColors.primaryColor }}
                    margin={'0 1rem 0 0'}
                  >
                    religious
                  </Text>
                </Link>
                <Link href={'/'}>
                  <Text
                    fontSize={'md'}
                    _hover={{ color: ThemeColors.primaryColor }}
                    margin={'0 1rem 0 0'}
                  >
                    gothic
                  </Text>
                </Link>
                <Link href={'/'}>
                  <Text
                    fontSize={'md'}
                    _hover={{ color: ThemeColors.primaryColor }}
                    margin={'0 1rem 0 0'}
                  >
                    non-fiction
                  </Text>
                </Link>
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
