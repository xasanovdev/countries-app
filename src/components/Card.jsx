import { styled } from 'styled-components';

const Wrapper = styled.article`
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  flex-grow: 1;
  flex-basis: 250px;
`;
const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
  @media screen and (max-width: 612px) {
    height: 270px;
  }
  @media screen and (max-width: 460px){
    height: 150px;
  }
`;
const CardBody = styled.div`
  padding: 1rem 1.5rem 2rem;
`;
const CardTitle = styled.h1`
  font-size: var(--fs-md);
  font-weight: var(--fw-md);
  font-style: oblique;
`;
const CardList = styled.ul`
  margin-top: 0.5rem;
`;
const CardListItem = styled.li``;

// eslint-disable-next-line react/prop-types
const Card = ({ img, info = [], name, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <CardImage src={img} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map((listItem) => (
            <CardListItem key={listItem.title}>
              <b>{listItem.title}</b> : {listItem.description}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  );
};

export default Card;
