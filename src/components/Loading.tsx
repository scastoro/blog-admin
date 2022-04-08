import styled from 'styled-components';
import spinner from '../images/loading_spinner.png';

type Props = {
  className?: string;
};
function Loading({ className }: Props) {
  return (
    <section className={className}>
      <img src={spinner} alt='' />
    </section>
  );
}

export const StyledLoading = styled(Loading)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;

  img {
    width: 40%;
    animation: rotate 3s linear infinite;

    @keyframes rotate {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;
