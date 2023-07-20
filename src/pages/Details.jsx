import axios from 'axios';
import { useEffect, useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';
import { searchByCountry } from '../config';
import { Button } from '../components/Button';
import Info from '../components/Info';

const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);

  return (
    <div>
      <Button
        onClick={() => {
          navigate(-1);
        }}
      >
        <IoArrowBack /> Back
      </Button>
      <Info {...country} navigate={navigate} />
    </div>
  );
};

export default Details;
