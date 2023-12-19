import { useDispatch } from 'react-redux';
import { searchFilter } from '../../store/myFilterSlice';
import { Box, Input } from '@chakra-ui/react';

export const Filter = props => {
  const dispatch = useDispatch();

  const handleFilter = event => {
    const filter = event.currentTarget.value;
    dispatch(searchFilter(filter));
  };
  return (
    <Box>
      <h1>Find contacts by name</h1>
      <Input
        variant="filled"
        type="text"
        name="name"
        onChange={handleFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
        placeholder="Search your name"
      />
    </Box>
  );
};
