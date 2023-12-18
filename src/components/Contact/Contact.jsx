import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContacts } from '../../redux/myContactsSlice';
import { getFilter } from '../../redux/myFilterSlice';
import { Li, Button } from './Contact.styled';

export const Contact = () => {
  const contacts = useSelector(getContacts);
  const myFilter = useSelector(getFilter);
  const dispatch = useDispatch();
  const formatNumber = number => {
    return number.replace(/(\d{3})(\d{2})(\d{2})/, `$1-$2-$3`);
  };

  const visibleContacts = () => {
    const normalizeFilter = myFilter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };
  const filterName = visibleContacts();
  return (
    <ul>
      {filterName.map((contact, id) => (
        <Li key={id}>
          {contact.name}: {formatNumber(contact.number)}{' '}
          <Button
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </Button>
        </Li>
      ))}
    </ul>
  );
};
