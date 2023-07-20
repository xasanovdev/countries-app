import HomePage from './pages/HomePage';
import Main from './components/Main';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Details from './pages/Details';
import { useState } from 'react';


function App() {
  const [countries, setCountries] = useState([]);
  

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route>
            <Route
              path="/"
              element={
                <HomePage countries={countries} setCountries={setCountries} />
              }
            ></Route>
            <Route path="/country/:name" element={<Details />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </Main>
    </>
  );
}

export default App;
