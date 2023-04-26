import React, { useEffect, useState } from 'react';
import { Images, ThemeColors } from '../Themes/default';
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import { Genres } from '../config/constants';
import Book from '../components/Books/Book';
import { fetchBooksFunc } from '../apis/apiFuncs';

const Home = () => {
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
        {/* // banner */}
        <Box
          height={{ base: 'auto', md: 'auto', xl: '350px' }}
          background={''}
          padding={{ base: '2rem 1rem', md: '2rem 1rem', xl: '3rem' }}
        >
          <Flex>
            <Box
              padding={{
                base: '1rem 0',
                md: '2rem 1rem',
                xl: '2rem 5rem 2rem 3rem',
              }}
              width={{ base: '100%', md: '100%', xl: '50%' }}
            >
              <Heading as={'h3'} size={'md'} color={'#b3b4b5'}>
                Fran Lebowitz
              </Heading>
              <Text fontSize={'5xl'}>
                "Think before you speak. Read before you think"
              </Text>
              <Box padding={'1rem 0'}>
                <Link href={'/browse'}>
                  <Button
                    background={'none'}
                    padding={'2rem'}
                    border={'1.8px solid #dbdbdb'}
                    fontSize={'lg'}
                  >
                    Browse Books
                  </Button>
                </Link>
              </Box>
            </Box>
            <Box
              width={'15%'}
              display={{ base: 'none', md: 'none', xl: 'block' }}
            ></Box>
            <Box
              width={'35%'}
              padding={'2rem 0'}
              display={{ base: 'none', md: 'none', xl: 'block' }}
            >
              <Image src={Images.img} />
            </Box>
          </Flex>
        </Box>
        {/* Section One */}
        <Box
          padding={{
            base: '2rem 1rem',
            md: '3rem 1rem',
            xl: '5rem 3rem 2rem 3rem',
          }}
        >
          <Box padding={'1rem 0'}>
            <Text
              fontSize={'2xl'}
              color={ThemeColors.primaryColor}
              textAlign={'center'}
            >
              All Categories
            </Text>
            <Heading
              as={'h3'}
              size={'2xl'}
              textAlign={'center'}
              margin={'0.5rem 0'}
            >
              Available categories
            </Heading>
          </Box>
          <Box padding={'1rem 0'}>
            <Flex>
              <Box
                margin={'auto'}
                width={{ base: '100%', md: '100%', xl: '70%' }}
              >
                <Flex justifyContent={'center'} flexWrap={'wrap'}>
                  {Genres.map((genre, index) => (
                    <Box key={index}>
                      <Text
                        padding={'0.5rem 1rem'}
                        margin={'1rem 0.5rem'}
                        border={'1.8px solid #dbdbdb'}
                      >
                        {genre.label}
                      </Text>
                    </Box>
                  ))}
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
        {/* Section 2 */}
        <Box
          padding={{ base: '1rem', md: '2rem 1rem', xl: '2rem 5rem 3rem 5rem' }}
        >
          <Box padding={'1rem 0'}>
            <Heading
              as={'h3'}
              size={'2xl'}
              textAlign={'center'}
              margin={'0.5rem 0'}
            >
              Featured Books
            </Heading>
          </Box>
          <Grid
            gridTemplateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(3, 1fr)',
              xl: 'repeat(5, 1fr)',
            }}
            gridGap="1rem"
            padding="2rem 1rem"
          >
            {Books ? (
              Books.length > 0 ? (
                Books.map((book, index) => <Book key={index} book={book} />)
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
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Home;
