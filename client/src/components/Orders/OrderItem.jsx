import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { ThemeColors } from '../../Themes/default';
import { AiOutlineClose, AiOutlineDelete } from 'react-icons/ai';

const OrderItem = ({ orderItem, book }) => {
  return (
    <Flex
      padding={{ base: '2rem 0', md: '1rem 0', xl: '1rem 0' }}
      flexDirection={{ base: 'column', md: 'row', xl: 'row' }}
    >
      <Box width={{ base: '100%', md: '50%', xl: '50%' }}>
        <Flex>
          <Image
            src={book?.thumbnail}
            width={{ base: '40%', md: '40%', xl: '20%' }}
          />
          <Box padding={'1rem'} width={{ base: '60%', md: '60%', xl: '28%' }}>
            <Text
              display={{ base: 'block', md: '-webkit-box', xl: '-webkit-box' }}
              style={{
                WebkitLineClamp: 1,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
              fontSize={{ base: '2xl', md: '2xl', xl: 'lg' }}
            >
              {book?.title}
            </Text>
            <Text fontSize={'md'} fontWeight={'bold'}>
              {book?.authors}
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box width={{ base: '100%', md: '30%', xl: '30%' }}>
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
      <Box width={{ base: '100%', md: '20%', xl: '20%' }}>
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
