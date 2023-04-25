import { Box, Button, Flex, Image, Input, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { ThemeColors } from '../../Themes/default';
import { AiOutlineClose, AiOutlineDelete } from 'react-icons/ai';
import { deleteCartFunc } from '../../apis/apiFuncs';
import Notification from '../Notifications/Notification';

const CartItem = ({ cartItem, calcTotalFunc, setCheckoutData }) => {
  let [Copies, setCopies] = useState(1);
  const [bookTotal, setBookTotal] = useState(
    parseInt(cartItem?.bookData?.price)
  );
  const [NotificationData, setNotificationData] = useState({
    type: '',
    status: '',
    message: '',
  });

  useEffect(() => {
    calcTotalFunc(parseInt(cartItem?.bookData?.price));
  }, []);

  const handleChangingCopiesValue = e => {
    if (e.target.getAttribute('data-target') == 'reduce') {
      if (Copies == 1) {
        setCopies((Copies = 1));
      } else {
        setCopies(prevState => parseInt(prevState) - 1);
        calcTotalFunc(-parseInt(cartItem?.bookData?.price));
      }
    } else {
      setCopies(prevState => parseInt(prevState) + 1);
      calcTotalFunc(parseInt(cartItem?.bookData?.price));
    }
  };

  const handleDelete = () => {
    deleteCartFunc(cartItem._id)
      .then(result => {
        if (result.status == 'Success') {
          setNotificationData(
            prevState =>
              (prevState = {
                ...prevState,
                type: 'success',
                status: true,
                message: 'Cart item deleted',
              })
          );
          // clear notification data
          clearNotification(true);
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
          clearNotification(false);
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
        clearNotification(false);
      });
  };

  function clearNotification(redirect) {
    setTimeout(() => {
      setNotificationData(
        prevState =>
          (prevState = { ...prevState, type: '', status: false, message: '' })
      );

      if (redirect) window.location.assign('/cart');
    }, 3000);
  }

  return (
    <>
      <Notification
        type={NotificationData.type}
        message={NotificationData.message}
        status={NotificationData.status}
      />
      <Flex padding={'1rem 0'}>
        <Box width={'50%'}>
          <Flex>
            <Image src={cartItem?.bookData?.thumbnail} width={'30%'} />
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
                {cartItem?.bookData?.title}
              </Text>
              <Text fontSize={'md'} fontWeight={'bold'}>
                {cartItem?.bookData?.authors}
              </Text>
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
                data-target={'reduce'}
                onClick={handleChangingCopiesValue}
              >
                -
              </Button>
              <Input
                type="number"
                name={'copies'}
                width={'40%'}
                value={Copies}
                data-book={cartItem?.bookData?._id}
                data-id={cartItem._id}
              />
              <Button
                width={'15%'}
                margin={'0 0.3rem'}
                border={'1.8px solid #000'}
                background={'none'}
                data-target={parseInt(cartItem?.bookData?.price)}
                onClick={handleChangingCopiesValue}
              >
                +
              </Button>
            </Flex>
          </Box>
        </Box>
        <Box width={'20%'}>
          <Flex>
            <Box padding={'0 2rem 0 0'}>
              <Text fontSize={'3xl'}>${cartItem?.bookData?.price}</Text>
            </Box>
            <Box padding={'0.5rem 1rem 0.5rem 0'}>
              <AiOutlineDelete
                size={30}
                color={ThemeColors.primaryColor}
                cursor={'pointer'}
                onClick={handleDelete}
              />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default CartItem;
