import ContactList from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { SearchForm } from './SearchForm/SearchForm';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '40px',
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize: 30,
        color: '#010101',
        marginLeft: '20px',
        width: 'fit-content',
      }}
    >
      <SearchForm />
      <Filter />
      <ContactList />
    </div>
  );
};
