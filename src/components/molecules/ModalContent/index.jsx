import styled from "styled-components";

const YesButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 100px;
  background-color: #007BFF;
  color: white;
`;

const NoButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 100px;
  background-color: #800080;
  color: white;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  padding: 2em;
  border-radius: 10px;
`;


const ModalContent = ({ deleteProject, closeModal }) => {
    return (
        <ModalContentContainer>
            <h2>Are you sure you want to delete this project?</h2>
            <ButtonsContainer>
            <YesButton onClick={deleteProject}>Yes</YesButton>
            <NoButton onClick={closeModal}>No</NoButton>
            </ButtonsContainer>
      </ModalContentContainer>
    );
};

export default ModalContent;
