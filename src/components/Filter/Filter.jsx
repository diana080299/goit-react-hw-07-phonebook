import { useDispatch } from 'react-redux';
import { Container, Input } from './Filter.styled';
import { searchFilter } from '../../redux/myFilterSlice';

export const Filter = props => {
  const dispatch = useDispatch();
  const handleFilter = event => {
    const filter = event.currentTarget.value;

    dispatch(searchFilter(filter));
  };
  return (
    <Container>
      <h1 style={{ fontSize: 30 }}>Find contacts by name</h1>
      <Input
        type="text"
        name="name"
        onChange={handleFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
        placeholder="Search your name"
      />
    </Container>
  );
};
