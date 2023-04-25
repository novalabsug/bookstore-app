import { Box, Flex, Grid, Heading, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { ThemeColors } from '../../Themes/default';
import { Genres } from '../../config/constants';

const Footer = () => {
  return (
    <Box padding={'0 2rem'}>
      <Flex padding={'2rem 1rem'}>
        <Box padding={'1rem 2rem'} width={'30%'}>
          <Box>
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
          <Box padding={'1rem 0'}>
            <Flex padding={'0.3rem 0'}>
              {/* <Box margin={'0 0.3rem'}>
                <FaEnvelope size={18} />
              </Box> */}
              <Text fontSize={'lg'}>booksbyme@gmail.com</Text>
            </Flex>
            <Flex padding={'0.3rem 0'}>
              {/* <Box margin={'0 0.3rem'}>
                <FaPhone size={18} />
              </Box> */}
              <Text fontSize={'lg'}>+256788463615</Text>
            </Flex>
          </Box>
        </Box>
        <Box padding={'1rem 2rem'} width={'45%'}>
          <Box>
            <Heading as={'h3'} size={'md'}>
              Categories
            </Heading>
          </Box>
          <Box padding={'0.5rem 0'}>
            <Flex flexWrap={'wrap'}>
              {Genres.map((genre, index) => (
                <Link key={index} href={'/search?search=' + genre.value}>
                  <Text
                    fontSize={'1.3rem'}
                    _hover={{ color: ThemeColors.primaryColor }}
                    margin={'0 1rem 0 0'}
                  >
                    {genre.label}
                  </Text>
                </Link>
              ))}
            </Flex>
          </Box>
        </Box>
      </Flex>
      <Box
        padding={'2rem 0'}
        borderTop={'1.8px solid ' + ThemeColors.baseColor2}
      >
        <Text textAlign={'center'} fontSize={'lg'}>
          &copy; Books Byme. All rights reserved
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
