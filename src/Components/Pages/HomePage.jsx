import React from 'react'
import Styles from "../Template"
import styled from "styled-components"

const MyFact = styled.li`
  font-size: 20px;
`;

const MyList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`;

const HomePage = () => {
  return (
    <Styles>
      <MyList>
        <MyFact> I love football and chess </MyFact>
        <MyFact> I love food </MyFact>
        <MyFact> I love anime </MyFact>
      </MyList>
    </Styles>
  );
};

export default HomePage;