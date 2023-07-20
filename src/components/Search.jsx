import { IoSearch } from 'react-icons/io5';
import { styled } from 'styled-components';

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1.5rem;

  @media screen and (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country ...',
})`
  margin-left: 2rem;
  border: none;
  width: 100%;
  outline: none;
  font-size: var(--fs-md);
  background-color: var(--colors-ui-base);
  color: var(--color-text);
`;

// eslint-disable-next-line react/prop-types
const Search = ({ search, setSearch }) => {
  return (
    <InputContainer>
      <IoSearch />
      <Input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </InputContainer>
  );
};

export default Search;
