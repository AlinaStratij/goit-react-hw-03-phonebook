import styled from '@emotion/styled';

export const AppWrapper = styled.div`
  margin-top: 40px;
  display: flex;
`;

export const FormWrapper = styled.div`
  background-color: aqua;
  width: 450px;
  height: 350px;
  margin-right: 50px;
  border: 1rem solid;
  border: 3mm ridge rgba(137, 238, 167, 0.6);
`;
export const ContactsWrapper = styled.div`
  width: 700px;
  background: rgb(251, 248, 249);
  background: radial-gradient(
    circle,
    rgba(251, 248, 249, 0) 80%,
    rgba(73, 236, 244, 0.97) 100%
  );
  &:hover,
  &:focus {
    background-color: rgb(243, 247, 245);
    color: #111;
    cursor: pointer;
    transform: scale(1.2);
  }
  border: 3mm ridge rgba(137, 238, 167, 0.6);
`;
export const Title = styled.h2`
  font-size: 30px;
  margin-left: 20px;
  display: flex;
  align-items: center;
`;
