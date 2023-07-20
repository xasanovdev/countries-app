import axios from 'axios';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { filteredByCode } from '../config';

const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 4rem;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media screen and (max-width: 767px) {
    gap: 1rem;
    margin-top: 1rem;
  }
`;

const InfoContent = styled.div`
  flex-grow: 1;
  width: 100%;
  @media screen and (max-width: 767px) {
    padding: 1rem;
    min-width: 100%;
  }
`;
const InfoImg = styled.img`
  display: block;
  flex-shrink: 1;
  width: 100%;
  height: 100%;
  object-fit: contain;

`;
const InfoTitle = styled.h1`
  font-weight: var(--fw-normal);
`;
const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`;
const List = styled.ul``;
const ListItem = styled.li`
  line-height: 1.8;
  & > b {
    font-weight: var(--fw-bold);
  }
`;
const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: flex-start;
`;
const TagGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap:wrap;
`;
const Tag = styled.span`
  padding: 0 1rem;
  line-height: 1.5;
  box-shadow: var(--shadow);
  cursor: pointer;
`;

const Info = ({
  name,
  population,
  region,
  subregion,
  topLevelDomain = [],
  currencies = [],
  languages = [],
  nativeName,
  flag,
  capital,
  borders = [],
  navigate,
}) => {

  const [neighbors, setNeighbors] = useState([])


  useEffect(() => {
    axios.get(filteredByCode(borders)).then(({data}) => setNeighbors(data.map(country => country.name)))
  },[borders]);


  return (
    <Wrapper>
      <div>
        <InfoImg src={flag} alt={name} />
      </div>
      <InfoContent>
        <InfoTitle>{name}</InfoTitle>
        <ListGroup>
          <List>
            <ListItem>
              <b>Native Name : </b>
              {nativeName}
            </ListItem>
            <ListItem>
              <b>Population : </b>
              {population}
            </ListItem>
            <ListItem>
              <b>Region : </b>
              {region}
            </ListItem>
            <ListItem>
              <b>Sub region : </b>
              {subregion}
            </ListItem>
            <ListItem>
              <b>Capital : </b>
              {capital}
            </ListItem>
          </List>
          <List>
            <ListItem>
              <b>Top Level Domain</b>{' '}
              {topLevelDomain.map((domain) => (
                <span key={domain}>{domain}</span>
              ))}
            </ListItem>
            <ListItem>
              <b>Currencies</b>{' '}
              {currencies.map((currency) => (
                <span key={currency.code}>{currency.name}</span>
              ))}
            </ListItem>
            <ListItem>
              <b>Languages</b>{' '}
              {languages.map((language) => (
                <span key={language.name}>{language.name}</span>
              ))}
            </ListItem>
          </List>
        </ListGroup>
        <Meta>
          <b>Border Countries:</b>
          {borders.length > 0 ? (
            <TagGroup>
              {neighbors.map((border) => (
                <Tag
                  key={border}
                  onClick={() => {
                    navigate(`/country/${border}`);
                  }}
                >
                  {border}
                </Tag>
              ))}
            </TagGroup>
          ) : (
            <span>There is no border countries</span>
          )}
        </Meta>
      </InfoContent>
    </Wrapper>
  );
};

export default Info;
