import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
  method?: string;
  submit?: (event: SyntheticEvent) => Promise<void>;
  children?: React.ReactNode;
}

const Form: React.FC<Props> = ({ className, children, method, submit }) => (
  <form className={className} method={method} onSubmit={submit}>
    {children}
  </form>
);

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  input,
  textarea {
    margin-bottom: 1rem;
  }
`;
