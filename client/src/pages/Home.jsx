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
import { Books } from '../config/constants';
import Book from '../components/Books/Book';

const Home = () => {
  return (
    <>
      <Box>
        {/* // banner */}
        <Box height={'350px'} background={''} padding={'3rem'}>
          <Flex>
            <Box padding={'2rem 5rem 2rem 3rem'} width={'50%'}>
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
            <Box width={'15%'}></Box>
            <Box width={'35%'} padding={'2rem 0'}>
              <Image src={Images.img} />
            </Box>
          </Flex>
        </Box>
        {/* Section One */}
        <Box padding={'5rem 3rem 2rem 3rem'}>
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
              <Box margin={'auto'} width={'70%'}>
                <Flex justifyContent={'center'} flexWrap={'wrap'}>
                  <Box cursor={'pointer'}>
                    <Text
                      padding={'0.5rem 1rem'}
                      margin={'1rem 0.5rem'}
                      border={'1.8px solid #dbdbdb'}
                    >
                      horror
                    </Text>
                  </Box>
                  <Box cursor={'pointer'}>
                    <Text
                      padding={'0.5rem 1rem'}
                      margin={'1rem 0.5rem'}
                      border={'1.8px solid #dbdbdb'}
                    >
                      mystery/crime
                    </Text>
                  </Box>
                  <Box cursor={'pointer'}>
                    <Text
                      padding={'0.5rem 1rem'}
                      margin={'1rem 0.5rem'}
                      border={'1.8px solid #dbdbdb'}
                    >
                      romance
                    </Text>
                  </Box>
                  <Box cursor={'pointer'}>
                    <Text
                      padding={'0.5rem 1rem'}
                      margin={'1rem 0.5rem'}
                      border={'1.8px solid #dbdbdb'}
                    >
                      sci-fi
                    </Text>
                  </Box>
                  <Box cursor={'pointer'}>
                    <Text
                      padding={'0.5rem 1rem'}
                      margin={'1rem 0.5rem'}
                      border={'1.8px solid #dbdbdb'}
                    >
                      thriller
                    </Text>
                  </Box>
                  <Box cursor={'pointer'}>
                    <Text
                      padding={'0.5rem 1rem'}
                      margin={'1rem 0.5rem'}
                      border={'1.8px solid #dbdbdb'}
                    >
                      hystorical
                    </Text>
                  </Box>
                  <Box cursor={'pointer'}>
                    <Text
                      padding={'0.5rem 1rem'}
                      margin={'1rem 0.5rem'}
                      border={'1.8px solid #dbdbdb'}
                    >
                      young adult
                    </Text>
                  </Box>
                  <Box cursor={'pointer'}>
                    <Text
                      padding={'0.5rem 1rem'}
                      margin={'1rem 0.5rem'}
                      border={'1.8px solid #dbdbdb'}
                    >
                      adventure
                    </Text>
                  </Box>
                  <Box cursor={'pointer'}>
                    <Text
                      padding={'0.5rem 1rem'}
                      margin={'1rem 0.5rem'}
                      border={'1.8px solid #dbdbdb'}
                    >
                      religious
                    </Text>
                  </Box>
                  <Box cursor={'pointer'}>
                    <Text
                      padding={'0.5rem 1rem'}
                      margin={'1rem 0.5rem'}
                      border={'1.8px solid #dbdbdb'}
                    >
                      gothic
                    </Text>
                  </Box>
                  <Box cursor={'pointer'}>
                    <Text
                      padding={'0.5rem 1rem'}
                      margin={'1rem 0.5rem'}
                      border={'1.8px solid #dbdbdb'}
                    >
                      non-fiction
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
        {/* Section 2 */}
        <Box padding={' 2rem 5rem 3rem 5rem'}>
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
            {Books.map((book, index) => (
              <Book key={index} book={book} />
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Home;
