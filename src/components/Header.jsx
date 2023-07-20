import { styled } from 'styled-components';
import { Container } from './Container';
import { IoMoon } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HeaderElement = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({ to: '/' })`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  font-weight: var(--fw-light);
  cursor:pointer;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Header = () => {

  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme==='light' ? 'dark' : 'light')
  }

  useEffect(() => {
    document.body.setAttribute('data-theme',theme)
  },[theme])
  
  return (
    <HeaderElement>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={toggleTheme}>
            <IoMoon />
            {theme === 'light' ? (
              <span>Light theme</span>
            ) : (
              <span>Dark theme</span>
            )}
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderElement>
  );
};

export default Header;
