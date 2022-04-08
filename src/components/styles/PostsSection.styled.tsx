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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 8rem;
  font-size: 1.4rem;
`;
