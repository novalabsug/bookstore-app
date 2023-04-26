import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  Input,
  Link,
  Spacer,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { ThemeColors } from '../../Themes/default';
import {
  FiHeart,
  FiUser,
  FiShoppingBag,
  FiHeadphones,
  FiLogIn,
  FiLogOut,
} from 'react-icons/fi';
import { IsLoggedInFunc, logoutFunc } from '../../middleware/middleware';
import { Profile } from '../../config/constants';
import { useState } from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import MobileNav from './MobileNav';

const MainNavbar = () => {
  const [searchData, setSearchData] = useState({ search: '' });

  const handleSearchSubmit = e => {
    e.preventDefault();

    window.location.assign(`/search?search=${searchData.search}`);
  };

  const handleSearchChange = e => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box>
        <Flex>
          <Box padding={{ base: '1rem', md: '1rem', xl: '2rem' }}>
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
          <Box
            padding={'2rem 3rem'}
            width={'30%'}
            display={{ base: 'none', md: 'none', xl: 'block' }}
          >
            <form onSubmit={handleSearchSubmit}>
              <Box>
                <Input
                  type="text"
                  name="search"
                  placeholder="Search by keywords"
                  onChange={handleSearchChange}
                  color={ThemeColors.baseColor}
                />
              </Box>
            </form>
          </Box>
          <Spacer display={{ base: 'none', md: 'none', xl: 'block' }} />
          <Box
            padding={'2rem'}
            display={{ base: 'none', md: 'none', xl: 'block' }}
          >
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
                  {IsLoggedInFunc().status ? (
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
                        {Profile?.fullname
                          ? Profile?.fullname.toString().split(' ', 1)[0]
                          : ''}
                      </Text>
                    </Box>
                  ) : (
                    <FiUser
                      size={30}
                      _hover={{ color: ThemeColors.primaryColor }}
                    />
                  )}
                </Box>
                <Spacer />
                {Profile?.accountType == 'admin' ? (
                  ''
                ) : (
                  <Box padding={'0 0.5rem'}>
                    <Link href={'/cart'}>
                      <FiShoppingBag
                        size={30}
                        _hover={{ color: ThemeColors.primaryColor }}
                      />
                    </Link>
                  </Box>
                )}
              </Flex>
              {Profile?.accountType == 'admin' ? (
                <Box padding={'0 1rem'}>
                  <Link href="/dashboard">
                    <Button
                      background={'none'}
                      padding={'1.3rem 1rem'}
                      border={'1.8px solid #dbdbdb'}
                      fontSize={'lg'}
                    >
                      Dashboard
                    </Button>
                  </Link>
                </Box>
              ) : (
                ''
              )}
              <Box padding={'0 1rem'}>
                {IsLoggedInFunc().status ? (
                  <Button
                    background={'none'}
                    padding={'1.3rem 1rem'}
                    border={'1.8px solid #dbdbdb'}
                    fontSize={'lg'}
                    onClick={logoutFunc}
                  >
                    <Box margin={'0 0.3rem'}>
                      <FiLogOut size={25} />
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
                    >
                      <Box margin={'0 0.3rem'}>
                        <FiLogIn size={25} />
                      </Box>
                      Sign In
                    </Button>
                  </Link>
                )}
              </Box>
            </Flex>
          </Box>
          <Box
            display={{ base: 'block', md: 'block', xl: 'none' }}
            padding={'1rem'}
          >
            <HiOutlineMenuAlt4 size={36} cursor={'pointer'} onClick={onOpen} />
          </Box>
        </Flex>
      </Box>
      <Drawer placement={'right'} onClose={onClose} isOpen={isOpen} size={'sm'}>
        <DrawerOverlay />
        <DrawerContent background={'none'} width={'50%'}>
          <DrawerCloseButton color={ThemeColors.baseColor} size={'lg'} />
          <MobileNav />
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MainNavbar;
