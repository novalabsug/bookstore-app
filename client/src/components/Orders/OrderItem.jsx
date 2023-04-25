import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { ThemeColors } from '../../Themes/default';
import { AiOutlineClose, AiOutlineDelete } from 'react-icons/ai';

const OrderItem = ({ orderItem, book }) => {
  return (
    <Flex padding={'1rem 0'}>
      <Box width={'50%'}>
        <Flex>
          <Image src={book?.thumbnail} width={'20%'} />
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
              {book?.title}
            </Text>
            <Text fontSize={'md'} fontWeight={'bold'}>
              {book?.authors}
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box width={'30%'}>
        <Box padding={'0 2rem 0 0'}>
          {orderItem.map((item, index) =>
            item?.book == book?._id ? (
              <Text key={index} fontSize={'2xl'}>
                {item.copies + (parseInt(item.copies) == 1 ? 'Copy' : 'Copies')}
              </Text>
            ) : (
              ''
            )
          )}
        </Box>
      </Box>
      <Box width={'20%'}>
        <Flex>
          <Box padding={'0 2rem 0 0'}>
            {orderItem.map((item, index) =>
              item?.book == book?._id ? (
                <Text key={index} fontSize={'3xl'}>
                  {'$' + parseInt(item.copies) * book.price}
                </Text>
              ) : (
                ''
              )
            )}
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default OrderItem;
