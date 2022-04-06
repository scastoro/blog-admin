import Modal from '../Modal';
import styled from 'styled-components';

export const StyledModal = styled(Modal)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);

  .modal-text {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    background-color: #fcfbfa;
    height: 400px;
    width: 400px;

    h2 {
      grid-column: 1 / -1;
      font-size: 3rem;
      font-weight: 400;
    }
    button {
      width: 10rem;
      height: 3.33rem;
    }
  }
`;
