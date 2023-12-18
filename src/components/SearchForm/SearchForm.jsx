import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact, getContacts } from '../../redux/myContactsSlice';
import { Button, Form, Input, Label } from './SearchForm.styled';

export const SearchForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const isContactExists = contacts.some(contact => contact.name === name);

    if (isContactExists) {
      alert(`${name} is already in contacts.`);
    } else {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      dispatch(addContact(newContact));
      form.reset();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input type="text" name="name" required placeholder="Entry your name" />
      </Label>
      <Label>
        Number
        <Input
          type="text"
          name="number"
          required
          placeholder="Entry your number"
        />
      </Label>

      <Button type="submit">Add contacts</Button>
    </Form>
  );
};
