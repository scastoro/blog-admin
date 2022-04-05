import React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
}

const Section: React.FC<Props> = ({ className, children }) => (
  <section className={className}>{children}</section>
);

export const PostsSection = styled(Section)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
`;
