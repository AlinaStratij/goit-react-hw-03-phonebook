import styled from '@emotion/styled';

export const FormWrapper = styled.form`
  background-color: aqua;
  width: 450px;
  height: 350px;
`;
export const FormLabel = styled.label`
  margin-left: 25px;
`;
export const FormInput = styled.input`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 10px 20px;
  padding: 5px;
  width: 350px;
  height: 30px;
  border-radius: 10px;
  font-style: italic;
`;
export const FormBtn = styled.button`
  padding: 15px 60px 15px 60px;
  margin: 10px 100px 10px;
  font-size: 15px;
  background-color: #60a685;
  color: #f4efef;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: rgb(243, 247, 245);
    color: #111;
    cursor: pointer;
  }
`;
