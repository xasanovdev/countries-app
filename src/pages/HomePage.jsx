import axios from 'axios';
import Controls from '../components/Controls';
import { useEffect, useState } from 'react';
import { ALL_COUNTRIES } from '../config';
import List from '../components/List';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const HomePage = ({ setCountries, countries }) => {
  const navigate = useNavigate();

  const [countriesFilter, setCountriesFilter] = useState(countries);
  const searchHandler = (search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter((country) => country.region.includes(region));
    }
    if (search) {
      data = data.filter((country) =>country.name.toLowerCase().includes(search.toLowerCase()));
    }
    setCountriesFilter(data);
  };

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    if(!countries.length) axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data))
  }, []);
  useEffect(() => {
    searchHandler()
  },[countries])

  return (
    <>
      <Controls onSearch={searchHandler} />
      <List>
        {
          countriesFilter.length>0 ? (
            countriesFilter.map((country) => {
          const countryInfo = {
            img: country.flag,
            name: country.name,
            info: [
              {
                title: 'Population',
                description: country.population.toLocaleString(),
              },
              {
                title: 'Region',
                description: country.region,
              },
              {
                title: 'Capital',
                description: country.capital,
              },
            ],
          };
          return (
            <Card
              key={country.name}
              onClick={() => {
                navigate(`/country/${country.name}`);
              }}
              {...countryInfo}
            />
          );
        })  
        ) : ('not found')
        }
      </List>
    </>
  );
};

export default HomePage;
