import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';

const PreviewWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 340px;
  background-color: hsl(0, 0%, 95%);
  background-size: cover;
`;

const PreviewInfoLabel = styled.div`
  position: absolute;
  z-index: 2;
  left: 0;
  bottom: 35px;
  width: 80%;
  min-height: 40px;
  background-color: black;
  color: white;
  padding: 5px 15px;

  h2,
  p {
    margin: 5px;
  }
`;

const StyledImage = styled(Image)`
  height: 100%;
  img {
    object-fit: cover !important;
  }
`;

const Preview = ({ title, excerpt, fluid }) => (
  <PreviewWrapper>
    <PreviewInfoLabel>
      <h2>{title}</h2>
      <p>{excerpt}</p>
    </PreviewInfoLabel>
    <StyledImage fluid={fluid} />
  </PreviewWrapper>
);

export default Preview;
