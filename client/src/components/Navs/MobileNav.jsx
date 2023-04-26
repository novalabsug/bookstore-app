import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { ThemeColors } from '../../Themes/default';
import { IsLoggedInFunc, logoutFunc } from '../../middleware/middleware';
import { Profile } from '../../config/constants';
import {
  FiHeadphones,
  FiLogIn,
  FiLogOut,
  FiShoppingBag,
  FiUser,
} from 'react-icons/fi';

const MobileNav = () => {
  const [searchData, setSearchData] = useState({ search: '' });

  const handleSearchSubmit = e => {
    e.preventDefault();

    window.location.assign(`/search?search=${searchData.search}`);
  };

  const handleSearchChange = e => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Stack
        padding={' 2rem 1rem'}
        background={ThemeColors.themeColor}
        height={'100%'}
      >
        <Box padding={'2rem 0'}>
          <form onSubmit={handleSearchSubmit}>
            <Box>
              <Input
                type="text"
                name="search"
                placeholder="Search by keywords"
                onChange={handleSearchChange}
              />
            </Box>
          </form>
        </Box>

        {IsLoggedInFunc().status ? (
          <Box padding={'1rem 0'}>
            <Box padding={'0 0.3rem'}>
              <Text
                color={ThemeColors.primaryColor}
                style={{
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
                fontSize={'2xl'}
              >
                Logged In as:
                {Profile?.fullname
                  ? Profile?.fullname.toString().split(' ', 1)[0]
                  : ''}
              </Text>
            </Box>
          </Box>
        ) : (
          <Box padding={'1rem 0'} display={'none'}>
            <FiUser size={30} _hover={{ color: ThemeColors.primaryColor }} />
          </Box>
        )}

        {Profile?.accountType == 'admin' ? (
          ''
        ) : (
          <Box padding={'1rem 0'}>
            <Link href={'/cart'} display={'flex'}>
              <FiShoppingBag
                size={40}
                _hover={{ color: ThemeColors.primaryColor }}
                color={ThemeColors.baseColor}
              />
              <Text
                fontSize={'2xl'}
                color={ThemeColors.baseColor}
                margin={'0 1rem'}
              >
                Cart
              </Text>
            </Link>
          </Box>
        )}
        <Box padding={'1rem 0'}>
          <Box padding={'0.5rem 0'}>
            <Link href="/browse">
              <Button
                background={'none'}
                padding={'1.3rem 1rem'}
                border={'1.8px solid #dbdbdb'}
                fontSize={'lg'}
                color={ThemeColors.baseColor}
              >
                Browse Books
              </Button>
            </Link>
          </Box>
          {Profile?.accountType == 'admin' ? (
            <Box padding={'0.5rem 0'}>
              <Link href="/dashboard">
                <Button
                  background={'none'}
                  padding={'1.3rem 1rem'}
                  border={'1.8px solid #dbdbdb'}
                  fontSize={'lg'}
                  color={ThemeColors.baseColor}
                >
                  Dashboard
                </Button>
              </Link>
            </Box>
          ) : (
            ''
          )}
          {Profile?.accountType == 'admin' ? (
            <Box padding={'0.5rem 0'}>
              <Link href="/orders">
                <Button
                  background={'none'}
                  padding={'1.3rem 1rem'}
                  border={'1.8px solid #dbdbdb'}
                  fontSize={'lg'}
                  color={ThemeColors.baseColor}
                >
                  Orders
                </Button>
              </Link>
            </Box>
          ) : (
            ''
          )}
        </Box>
        <Box padding={'1rem 0'}>
          {IsLoggedInFunc().status ? (
            <Button
              background={'none'}
              padding={'1.3rem 1rem'}
              border={'1.8px solid #dbdbdb'}
              fontSize={'lg'}
              onClick={logoutFunc}
              color={ThemeColors.baseColor}
            >
              <Box margin={'0 0.3rem'}>
                <FiLogOut size={25} color={ThemeColors.baseColor} />
              </Box>
              Logout
            </Button>
          ) : (
            <Link href="/signin">
              <Button
                background={'none'}
                padding={'1.3rem 1rem'}
                border={'1.8px solid #dbdbdb'}
                fontSize={'lg'}
                color={ThemeColors.baseColor}
              >
                <Box margin={'0 0.3rem'}>
                  <FiLogIn size={25} color={ThemeColors.baseColor} />
                </Box>
                Sign In
              </Button>
            </Link>
          )}
        </Box>
        <Box padding={'2rem 0'}>
          <Flex>
            <Box padding={'0.5rem'}>
              <FiHeadphones size={45} color={ThemeColors.baseColor} />
            </Box>
            <Box padding={'0.3rem 0'}>
              <Heading as={'h3'} size={'md'} color={ThemeColors.baseColor}>
                +256788463615
              </Heading>
              <Text fontSize={'lg'} color={ThemeColors.baseColor}>
                Call us today
              </Text>
            </Box>
          </Flex>
        </Box>
      </Stack>
    </>
  );
};

export default MobileNav;
