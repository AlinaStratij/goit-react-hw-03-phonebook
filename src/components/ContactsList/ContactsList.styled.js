import styled from '@emotion/styled';

export const ListWrapper = styled.div``;
export const ContactList = styled.ul`
  text-decoration: none;
  font-style: italic;
  font-weight: 20px;
`;
export const ListItem = styled.li`
  display: flex;
  align-items: center;
`;
export const DeleteBtn = styled.button`
  width: 100px;
  margin-left: 20px;
  &:hover,
  &:focus {
    background-color: aqua;
    color: rgb(129, 20, 20);
    cursor: pointer;
  }
`;
export const Name = styled.p`
  margin-right: 20px;
`;
