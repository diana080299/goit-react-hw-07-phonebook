import { Contact } from 'components/Contact/Contact';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isLoading } from '../../redux/contacts/selectors';
import * as fetchContact from 'service/api';

const ContactList = () => {
  const loading = useSelector(isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return <div>{loading ? <h1>Loading...</h1> : <Contact />}</div>;
};

export default ContactList;
