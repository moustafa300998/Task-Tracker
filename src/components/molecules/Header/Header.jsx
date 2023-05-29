import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  width: 100%;
  background-color: #ccc;
  color: white;
  padding: 0.5rem 1rem;
  padding: 20px 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 10px;
  color: white;
`;

const Title = styled.div`
  font-size: 1.5rem;
  color: #000;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Task Tracker</Title>
      <LinkContainer>
        <Link to="/">home</Link>
        <Link to="/projects">projects</Link>
      </LinkContainer>
    </HeaderContainer>
  );
};

export default Header;