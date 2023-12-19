import { Contact } from 'components/Contact/Contact';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isLoading } from '../../store/contacts/selectors';
import { fetchContact } from 'store/contacts/operations';
import { Box } from '@chakra-ui/react';
import ClipLoader from 'react-spinners/ClipLoader';

export const ContactList = () => {
  const loading = useSelector(isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      bg="brand.100"
    >
      {loading ? <ClipLoader size={150} color="#36d7b7" /> : <Contact />}
    </Box>
  );
};
