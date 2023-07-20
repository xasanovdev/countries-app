import { styled } from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  margin-top: 2rem;
`;
const List = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default List;
