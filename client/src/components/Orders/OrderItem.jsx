import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { ThemeColors } from '../../Themes/default';
import { AiOutlineClose, AiOutlineDelete } from 'react-icons/ai';

const OrderItem = ({ orderItem }) => {
  return (
    <Flex padding={'1rem 0'}>
      <Box width={'50%'}>
        <Flex>
          <Image src={orderItem?.thumbnailUrl} width={'30%'} />
          <Box padding={'1rem'}>
            <Text
              display={'-webkit-box'}
              style={{
                WebkitLineClamp: 1,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
              fontSize={'lg'}
            >
              {orderItem?.title}
            </Text>
            {orderItem?.authors.map((author, index) => (
              <Text fontSize={'md'} fontWeight={'bold'}>
                {author}
              </Text>
            ))}
          </Box>
        </Flex>
      </Box>
      <Box width={'30%'}>
        <Box padding={'0 2rem 0 0'}>
          <Text fontSize={'2xl'}>9 Copies</Text>
        </Box>
      </Box>
      <Box width={'20%'}>
        <Flex>
          <Box padding={'0 2rem 0 0'}>
            <Text fontSize={'3xl'}>${orderItem?.pageCount}</Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default OrderItem;
