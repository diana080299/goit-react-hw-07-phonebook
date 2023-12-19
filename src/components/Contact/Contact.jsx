import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../store/contacts/operations';
import { selectVisibleContacts } from '../../store/contacts/selectors';
import { Button, Box } from '@chakra-ui/react';

export const Contact = () => {
  const dispatch = useDispatch();

  const formatNumber = number => {
    return number.replace(/(\d{3})(\d{2})(\d{2})/, '$1-$2-$3');
  };

  const filterName = useSelector(selectVisibleContacts);
  return (
    <Box display="grid" gridGap={2} gridAutoFlow="row dense">
      {filterName.map((contact, id) => (
        <Box boxShadow="xl" p="6" rounded="md" bg="white" key={id}>
          {contact.name}: {formatNumber(contact.phone)}{' '}
          <Button
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </Button>
        </Box>
      ))}
    </Box>
  );
};
