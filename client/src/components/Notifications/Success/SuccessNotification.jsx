import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { ThemeColors } from '../../../Themes/default';

const SuccessNotification = ({ message, displayStatus }) => {
  return (
    <Box
      position={'fixed'}
      top={'2rem'}
      right={'3rem'}
      width={'300px'}
      background={'teal'}
      padding={'3rem 1rem'}
      display={displayStatus ? 'block' : 'none'}
    >
      <Text fontSize={'2xl'} color={ThemeColors.baseColor} textAlign={'center'}>
        {message}
      </Text>
    </Box>
  );
};

export default SuccessNotification;
