import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Link,
  Spacer,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { ThemeColors } from '../../Themes/default';
import {
  FiHeart,
  FiUser,
  FiShoppingBag,
  FiHeadphones,
  FiLogIn,
} from 'react-icons/fi';

const MainNavbar = () => {
  return (
    <Box>
      <Flex>
        <Box padding={'2rem'}>
          <Link href={'/'}>
            <Heading
              as={'h2'}
              size={'lg'}
              textTransform={'uppercase'}
              display={'flex'}
            >
              books|
              <Heading as={'h2'} size={'lg'} color={ThemeColors.primaryColor}>
                ByMe
              </Heading>
            </Heading>
          </Link>
        </Box>
        <Spacer />
        <Box padding={'2rem 3rem'} width={'40%'}>
          <form>
            <Box>
              <Input type="text" placeholder="Search by keywords" />
            </Box>
          </form>
        </Box>
        <Spacer />
        <Box padding={'2rem'}>
          <Flex>
            <Box>
              <Flex>
                <Box padding={'0.5rem'}>
                  <FiHeadphones size={35} />
                </Box>
                <Box>
                  <Heading as={'h3'} size={'sm'}>
                    +256788463615
                  </Heading>
                  <Text fontSize={'lg'}>Call us today</Text>
                </Box>
              </Flex>
            </Box>
            <Flex padding={'0.5rem 1rem'}>
              <Box padding={'0 0.5rem'}>
                <Link href={'/'}>
                  <FiUser
                    size={30}
                    _hover={{ color: ThemeColors.primaryColor }}
                  />
                </Link>
              </Box>
              <Spacer />
              <Box padding={'0 0.5rem'}>
                <Link href={'/cart'}>
                  <FiShoppingBag
                    size={30}
                    _hover={{ color: ThemeColors.primaryColor }}
                  />
                </Link>
              </Box>
            </Flex>
            <Box padding={'0 1rem'}>
              <Link href="/signin">
                <Button
                  background={'none'}
                  padding={'1.3rem 1rem'}
                  border={'1.8px solid #dbdbdb'}
                  fontSize={'lg'}
                >
                  <Box margin={'0 0.3rem'}>
                    <FiLogIn size={25} />
                  </Box>
                  Sign In
                </Button>
              </Link>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default MainNavbar;
