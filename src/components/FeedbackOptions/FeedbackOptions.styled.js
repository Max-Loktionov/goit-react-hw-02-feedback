import styled from 'styled-components';

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const BtnFeedback = styled.button`
  background-color: #47ffa3;
  border: 4px solid silver;
  border-radius: 10px;
  outline: 1px solid gold;
  cursor: pointer;
  text-transform: capitalize;
  :hover,
  :focus {
    background-color: #40f8f3;
    color: tomato;
  }
`;
