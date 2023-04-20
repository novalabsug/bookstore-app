import { Box, Button, Flex, Input, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { ThemeColors } from '../Themes/default';

const Signin = () => {
  return (
    <Box padding={'3rem 0 5rem 0'}>
      <Box padding={'1rem 0'}>
        <Text textAlign={'center'} fontSize={'4xl'}>
          Login
        </Text>
      </Box>
      <Box>
        <form>
          <Box>
            <Flex>
              <Box margin={'auto'} width={'50%'}>
                <Box padding={'0.5rem 0'}>
                  <Input type="text" placeholder={'Email'} />
                </Box>
                <Box padding={'0.5rem 0'}>
                  <Input type="password" placeholder={'Password'} />
                </Box>
                <Box padding={'0.5rem 0'}>
                  <Flex>
                    <Text fontSize={'lg'}>Don't have an accocunt</Text>
                    <Link href="/signup" margin={'0 0.3rem'}>
                      <Text fontSize={'lg'} color={ThemeColors.primaryColor}>
                        Sign Up
                      </Text>
                    </Link>
                  </Flex>
                </Box>
                <Box padding={'1rem 0'}>
                  <Button colorScheme="orange" type="submit" size={'lg'}>
                    Sign In
                  </Button>
                </Box>
              </Box>
            </Flex>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Signin;
