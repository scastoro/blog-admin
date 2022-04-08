import Button from '../Button';
import styled from 'styled-components';

export const StyledButton = styled(Button)`
  background-color: ${(props) =>
    props.name?.includes('Delete')
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
  padding: ${(props) => !props.children && '4px 21px'};
  border-radius: 15px;
  height: 2.75rem;

  &:hover {
    opacity: 0.75;
  }
  a {
    display: inline-block;
    padding: ${(props) => props.children && '4px 21px'};
  }
`;
