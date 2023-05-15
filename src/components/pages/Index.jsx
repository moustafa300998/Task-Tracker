import React from 'react'
import DefaultTemplate from "../templates"
import styled from "styled-components"
import Button from "../atoms/Button";

const MyFact = styled.li`
  font-size: 15px;
`;

const MyList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`;

const onClick = () => {
  console.log("Hi there");
};

const HomePage = () => {
  return (
    <DefaultTemplate>
      <MyList>
        <MyFact> I like food </MyFact>
        <MyFact> I like football </MyFact>
        <MyFact> I like anime </MyFact>
      </MyList>
      <Button onClick={onClick} label="hello"/>
    </DefaultTemplate>
  );
};

export default HomePage;