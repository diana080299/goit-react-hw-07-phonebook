import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
// import { Button, Label } from './SearchForm.styled';
import { selectContacts } from '../../store/contacts/selectors';
import { postContacts } from 'store/contacts/operations';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import { FiUser } from 'react-icons/fi';

// ... (import statements remain unchanged)

export const SearchForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;

    const isContactExists = contacts.some(contact => contact.name === name);

    if (isContactExists) {
      alert(`${name} is already in contacts.`);
    } else {
      const newContact = {
        id: nanoid(),
        name,
        phone,
      };
      dispatch(postContacts(newContact));
      form.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>
          Name
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <FiUser color="gray" />
            </InputLeftElement>
            <Input
              variant="flushed"
              type="text"
              name="name"
              required
              placeholder="Enter your name"
            />
          </InputGroup>
        </FormLabel>
        <FormLabel>
          Number
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <PhoneIcon color="gray.300" />
            </InputLeftElement>
            <Input
              variant="flushed"
              type="text"
              name="phone"
              required
              placeholder="Enter your number"
            />
          </InputGroup>
        </FormLabel>
        <Button type="submit">Add contacts</Button>
      </FormControl>
    </form>
  );
};
