import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Books } from '../config/constants';

const Bookdetails = () => {
  const [searchParam] = useSearchParams();
  const ID = searchParam.get('id');

  let NewBook = {};

  for (const book of Books) {
    if (book._id == ID) {
      NewBook = { ...NewBook, ...book };
    }
  }

  return (
    <Box padding={'3rem'}>
      <Flex>
        <Box margin={'auto'} width={'70%'}>
          <Flex>
            <Box width={'40%'}>
              <Image src={NewBook?.thumbnailUrl} width={'100%'} />
            </Box>
            <Box width={'60%'} padding={'0 2rem'}>
              <Box>
                <Text fontSize={'5xl'}>{NewBook?.title}</Text>
                <Box padding={'1rem 0'}>
                  {NewBook?.authors.map((author, index) => (
                    <Text key={index} fontSize={'md'} fontWeight={'bold'}>
                      {author}
                    </Text>
                  ))}
                </Box>
              </Box>
              <Box>
                <Flex>
                  <Text fontSize={'2xl'}>$ {NewBook?.pageCount}</Text>
                  <Box padding={'0 1rem'}>
                    <Button
                      background={'none'}
                      padding={'1rem'}
                      border={'1.8px solid #dbdbdb'}
                      fontSize={'lg'}
                    >
                      Add to cart
                    </Button>
                  </Box>
                </Flex>
              </Box>
              <Box padding={'1rem 0'}>
                <Box padding={'1rem 0'}>
                  <Heading as={'h3'} size={'lg'}>
                    Description
                  </Heading>
                </Box>
                <Box>
                  <Text fontSize={'md'}>
                    {NewBook?.longDescription
                      ? NewBook?.longDescription
                      : NewBook?.shortDescription
                      ? NewBook?.shortDescription
                      : ''}
                  </Text>
                </Box>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Bookdetails;
