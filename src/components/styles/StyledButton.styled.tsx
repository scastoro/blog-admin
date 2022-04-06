import Button from '../Button';
import styled from 'styled-components';

export const StyledButton = styled(Button)`
  background-color: ${(props) =>
    props.name === 'Delete'
      ? '#C91C45'
      : props.name === 'Publish'
      ? '#BE612C'
      : props.name === 'Unpublish'
      ? '#BE612C'
      : '#2c6ebe'};
  color: #fcfbfa;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  border: none;
  padding: 4px 21px;
  border-radius: 15px;
  margin: 0 5px;
`;
