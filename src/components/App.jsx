import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { SearchForm } from './SearchForm/SearchForm';
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';

export const App = () => {
  const theme = extendTheme({
    colors: {
      brand: {
        100: '#f7fafc',
        // ...
        900: '#1a202c',
      },
    },
  });

  return (
    <>
      <ChakraProvider theme={theme}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <SearchForm />
          <Filter />
        </Box>
        <ContactList />
      </ChakraProvider>
    </>
  );
};
