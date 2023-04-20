import { Box, Button, Flex, Image, Input, Text } from '@chakra-ui/react';
import React from 'react';
import { ThemeColors } from '../../Themes/default';
import { AiOutlineClose, AiOutlineDelete } from 'react-icons/ai';

const CartItem = ({ cartItem }) => {
  return (
    <Flex padding={'1rem 0'}>
      <Box width={'50%'}>
        <Flex>
          <Image src={cartItem.thumbnailUrl} width={'30%'} />
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
              {cartItem.title}
            </Text>
            {cartItem.authors.map((author, index) => (
              <Text fontSize={'md'} fontWeight={'bold'}>
                {author}
              </Text>
            ))}
          </Box>
        </Flex>
      </Box>
      <Box width={'30%'}>
        <Box>
          <Flex>
            <Button
              width={'15%'}
              margin={'0 0.3rem'}
              border={'1.8px solid #000'}
              background={'none'}
            >
              -
            </Button>
            <Input type="number" width={'40%'} />
            <Button
              width={'15%'}
              margin={'0 0.3rem'}
              border={'1.8px solid #000'}
              background={'none'}
            >
              +
            </Button>
          </Flex>
        </Box>
      </Box>
      <Box width={'20%'}>
        <Flex>
          <Box padding={'0 2rem 0 0'}>
            <Text fontSize={'3xl'}>${cartItem.pageCount}</Text>
          </Box>
          <Box padding={'0.5rem 1rem 0.5rem 0'}>
            <AiOutlineDelete
              size={30}
              color={ThemeColors.primaryColor}
              cursor={'pointer'}
            />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default CartItem;
