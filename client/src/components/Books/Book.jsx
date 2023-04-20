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
        <Image src={book.thumbnailUrl} width={'100%'} />
        <Box padding={'0.5rem 0 0 0'}>
          <Box>
            <Text
              display={'-webkit-box'}
              style={{
                WebkitLineClamp: 1,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
              fontSize={'1.1rem'}
            >
              {book.title}
            </Text>
            <Text
              fontSize={'1.1rem'}
              fontWeight={'bold'}
              color={ThemeColors.primaryColor}
            >
              $ {book.pageCount}
            </Text>
          </Box>
        </Box>
      </Link>
    </>
  );
};

export default Book;
