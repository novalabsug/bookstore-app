import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  FormLabel,
  Grid,
  Heading,
  Input,
  Text,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';
import { ThemeColors } from '../../Themes/default';
import { useState } from 'react';
import { Genres } from '../../config/constants';
import { BiImageAdd } from 'react-icons/bi';
import { newBookFunc } from '../../apis/apiFuncs';
import Notification from '../Notifications/Notification';

const NewBooks = () => {
  const [BookData, setBookData] = useState({
    title: '',
    price: '',
    publishedDate: '',
    thumbnail: '',
    authors: '',
    categories: [],
    details: '',
  });

  const [thumbnailValue, setThumbnailValue] = useState('');
  const [NotificationData, setNotificationData] = useState({
    type: '',
    status: '',
    message: '',
  });

  const handleChange = e => {
    setBookData({ ...BookData, [e.target.name]: e.target.value });
  };

  const handleThumbnailChange = e => {
    e.target.files.length > 1
      ? setThumbnailValue(`${e.target.files.length} Files selected`)
      : setThumbnailValue(e.target.files[0].name);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const Checkboxes = e.target.querySelectorAll('input[type="checkbox"]');

    for (const checkbox of Checkboxes) {
      if (checkbox.checked) {
        BookData.categories.push(checkbox.value);
      }
    }

    const formData = new FormData(e.target);
    formData.append('BookData', JSON.stringify(BookData));

    newBookFunc(formData)
      .then(result => {
        if (result.status == 'Success') {
          setNotificationData(
            prevState =>
              (prevState = {
                ...prevState,
                type: 'success',
                status: true,
                message: 'Book has been added',
              })
          );

          // clear notification data
          clearNotification({ redirect: true });
        }

        if (result.Error) {
          setNotificationData(
            prevState =>
              (prevState = {
                ...prevState,
                type: 'error',
                status: true,
                message: result.Error.message
                  ? result.Error.message
                  : result.Error,
              })
          );
          // clear notification data
          clearNotification({ redirect: false });
        }
      })
      .catch(err => {
        setNotificationData(
          prevState =>
            (prevState = {
              ...prevState,
              type: 'error',
              status: true,
              message: 'Unexpected error occured',
            })
        );
        // clear notification data
        clearNotification({ redirect: false });
      });
  };

  function clearNotification(data) {
    setTimeout(() => {
      setNotificationData(
        prevState =>
          (prevState = { ...prevState, type: '', status: false, message: '' })
      );

      if (data.redirect) window.location.assign('/dashboard');
    }, 3000);
  }

  const getTodayDate = () => {
    let today = new Date();

    return (
      today.getFullYear() +
      '-' +
      ((today.getMonth() + 1).toString().length > 1
        ? today.getMonth() + 1
        : '0' + (today.getMonth() + 1).toString()) +
      '-' +
      (today.getDate() - 1)
    );
  };

  return (
    <>
      <Notification
        type={NotificationData.type}
        message={NotificationData.message}
        status={NotificationData.status}
      />
      <Box
        borderRadius={'0.5rem'}
        padding={'1rem'}
        background={ThemeColors.themeColor}
      >
        <form onSubmit={handleSubmit}>
          <Box padding={'1rem 0'}>
            <Text fontSize={'lg'} color={ThemeColors.baseColor}>
              Add New Book
            </Text>
          </Box>
          <Grid
            gridTemplateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(1, 1fr)',
              xl: 'repeat(2, 1fr)',
            }}
            gridGap="1rem"
            padding={'1rem 0'}
          >
            <Box>
              <Input
                type="text"
                color={ThemeColors.baseColor}
                name="title"
                placeholder="Title"
              />
            </Box>
            <Box>
              <Input
                type="number"
                color={ThemeColors.baseColor}
                name="price"
                placeholder="Price"
              />
            </Box>
          </Grid>
          <Grid
            gridTemplateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(1, 1fr)',
              xl: 'repeat(2, 1fr)',
            }}
            gridGap="1rem"
            padding={'1rem 0'}
          >
            <Box>
              <FormLabel color={ThemeColors.baseColor}>
                Published Date
              </FormLabel>
              <Input
                type="date"
                color={ThemeColors.baseColor}
                name="publishedDate"
                placeholder="Published Date"
                max={getTodayDate()}
              />
            </Box>
            <Box>
              <FormLabel color={ThemeColors.baseColor}>Author(s)</FormLabel>
              <Input
                type="text"
                color={ThemeColors.baseColor}
                name="authors"
                placeholder="eg (John Doe, Mary Doe)"
              />
            </Box>
          </Grid>
          <Box padding={'1rem 0'}>
            <FormLabel color={ThemeColors.baseColor}>Book categories</FormLabel>
            <Box>
              <Grid
                gridTemplateColumns={{
                  base: 'repeat(1, 1fr)',
                  md: 'repeat(2, 1fr)',
                  xl: 'repeat(4, 1fr)',
                }}
                gridGap="1rem"
                padding={'0 0.5rem'}
              >
                {Genres.map((genre, index) => (
                  <Box key={index}>
                    <Checkbox
                      color={ThemeColors.baseColor}
                      size={'md'}
                      value={genre.value}
                    >
                      {genre.label}
                    </Checkbox>
                  </Box>
                ))}
              </Grid>
            </Box>
          </Box>
          <Box padding={'1rem 0'}>
            <Box padding={'0.5rem 0'}>
              <Heading as={'h3'} color={ThemeColors.baseColor} size={'sm'}>
                Thumbnail Image
              </Heading>
            </Box>
            <FormLabel
              htmlFor="thumbnail"
              height={'150px'}
              borderRadius={'0.5rem'}
              border={'1.8px solid ' + ThemeColors.baseColor}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              cursor={'pointer'}
            >
              <Box>
                {thumbnailValue == '' ? (
                  <BiImageAdd size={80} color={ThemeColors.baseColor} />
                ) : (
                  <Text fontSize={'lg'} color={ThemeColors.baseColor}>
                    {thumbnailValue}
                  </Text>
                )}
              </Box>
            </FormLabel>
            <Input
              type="file"
              accept="image/*"
              multiple
              name="thumbnail"
              id="thumbnail"
              onChange={handleThumbnailChange}
              hidden
            />
          </Box>
          <Box padding={'0.5rem 0'}>
            <Textarea
              name="details"
              color={ThemeColors.baseColor}
              size={'lg'}
              resize={'vertical'}
              placeholder="Project Details"
              onChange={handleChange}
            />
          </Box>
          <Box padding={'0.5rem 0'}>
            <Button colorScheme="blue" type={'submit'} size={'md'}>
              Add Book
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default NewBooks;
