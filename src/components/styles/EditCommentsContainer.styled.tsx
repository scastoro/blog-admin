import styled from 'styled-components';

interface Props {
  className?: string;
  children?: React.ReactNode;
}
const EditComments: React.FC<Props> = ({ className, children }) => (
  <section className={className}>{children}</section>
);
export const StyledComments = styled(EditComments)`
  grid-row: 4 /5;
  grid-column: 2/6;
  display: grid;
  grid-template-columns: 4fr 1fr;
  margin-bottom: 1rem;

  button.delete {
    width: 80%;
    height: 30%;
    align-self: center;
    justify-self: flex-start;
  }
  button {
    margin-left: 0;
  }
`;
