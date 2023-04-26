import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { ThemeColors } from '../../Themes/default';

const Book = ({ book }) => {
  return (
    <>
      <Link
        href={'/bookdetails?id=' + book._id}
        padding={'1rem'}
        background={ThemeColors.baseColor}
      >
        <Image src={'http://localhost:3501/' + book.thumbnail} width={'100%'} />
        <Box padding={'0.5rem 0 0 0'}>
          <Box>
            <Text
              display={{
                base: 'block',
                md: '-webkit-box',
                xl: '-webkit-box',
              }}
              style={{
                WebkitLineClamp: 1,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
              fontSize={{ base: '2xl', md: '2xl', xl: 'lg' }}
            >
              {book.title}
            </Text>
            <Text
              fontSize={'1.1rem'}
              fontWeight={'bold'}
              color={ThemeColors.primaryColor}
            >
              $ {book.price}
            </Text>
          </Box>
        </Box>
      </Link>
    </>
  );
};

export default Book;
