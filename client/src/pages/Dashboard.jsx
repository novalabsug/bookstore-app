import {
  Box,
  Grid,
  Stack,
  Link,
  Text,
  Flex,
  Heading,
  Spacer,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
// import { Books } from '../config/constants';
import Book from '../components/Books/Book';
import NewBooks from '../components/Books/NewBooks';
import { ThemeColors } from '../Themes/default';
import { fetchBooksFunc } from '../apis/apiFuncs';

const Dashboard = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [Books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooksFunc()
      .then(result => {
        if (result.status == 'Success') {
          setBooks(result.Books);
        }
      })
      .catch(err => {});
  }, []);

  return (
    <>
      <Box padding={'3rem'}>
        <Flex>
          <Box width={'20%'}>
            <Stack>
              <Box padding={'0.5rem 0'}>
                <Link href="/dashboard">
                  <Text fontSize={'lg'}>Dashboard</Text>
                </Link>
              </Box>
              <Box padding={'0.5rem 0'}>
                <Link href="/orders">
                  <Text fontSize={'lg'}>Orders</Text>
                </Link>
              </Box>
            </Stack>
          </Box>
          <Box width={'80%'}>
            <Box padding={'1rem 0'}>
              <Flex>
                <Heading as={'h3'} size={'md'}>
                  All Books
                </Heading>
                <Spacer />
                <Box>
                  <Button
                    background={'none'}
                    padding={'1rem'}
                    border={'1.8px solid #dbdbdb'}
                    fontSize={'lg'}
                    onClick={onOpen}
                  >
                    Add Book
                  </Button>
                </Box>
              </Flex>
            </Box>
            <Grid
              gridTemplateColumns={{
                base: 'repeat(1, 1fr)',
                md: 'repeat(3, 1fr)',
                xl: 'repeat(5, 1fr)',
              }}
              gridGap="1rem"
              padding={'0 2rem'}
            >
              {Books ? (
                Books.length > 0 ? (
                  Books.map((book, index) => <Book key={index} book={book} />)
                ) : (
                  <Box padding={'2rem 0'}>
                    <Text fontSize={'2xl'} textAlign={'center'}>
                      No books found
                    </Text>
                  </Box>
                )
              ) : (
                <Box padding={'2rem 0'}>
                  <Text fontSize={'2xl'} textAlign={'center'}>
                    No books found
                  </Text>
                </Box>
              )}
            </Grid>
          </Box>
        </Flex>
      </Box>
      <Box>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size={'2xl'}
          padding={'1rem 0'}
        >
          <ModalOverlay />
          <ModalContent background={'none'} padding={'3rem 2rem'}>
            <ModalCloseButton size={'lg'} color={ThemeColors.baseColor} />
            <NewBooks />
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default Dashboard;
