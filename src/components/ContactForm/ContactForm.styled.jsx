import styled from '@emotion/styled';

export const Div = styled.div`
  /* width: 400px; */
  /* outline: 2px solid red; */
`;
export const Form = styled.form`
  margin: 0 auto;
  width: 500px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-align: center;
`;
export const Label = styled.label`
  display: block;
  margin: 0 auto;
  margin-bottom: 16px;
  max-width: 300px;
  text-align: center;
  color: #af4425;
`;
export const Input = styled.input`
  display: block;
  padding: 4px 8px;
  margin-top: 4px;
  background-color: #ebdcb2;
  font-weight: 500;
  font-size: 16px;
  color: #662e1c;
  width: 100%;
  border-radius: 4px;
  border-color: #c9a66b;
  outline: none;
`;
export const Button = styled.button`
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-family: inherit;
  width: 200px;
  cursor: pointer;
  color: #af4425;
  border-color: transparent;
  border: 2px solid;
  border-radius: 10px;
  border-color: #c9a66b;
  transition: transform 250ms linear;
  :hover,
  :focus {
    transform: scale(1.08);
  }
`;
