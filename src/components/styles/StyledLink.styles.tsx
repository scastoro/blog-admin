import React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
}

const Link: React.FC<Props> = ({ className, children }) => <a className={className}>{children}</a>;

export const StyledLink = styled(Link)`
  background-color: blue;
`;
