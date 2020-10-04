import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavigationWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 30px;
  display: flex;
  align-items: center;
  justify-content: start;
  font-family: 'Montserrat';
`;

const Logo = styled.span`
  font-weight: 700;
  font-size: 20px;
  margin-right: 10px;
`;

const NavigationList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;

const NavigationListItem = styled.li`
  font-weight: 600;
  margin-left: 32px;
`;

const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Navigation = () => (
  <NavigationWrapper>
    <Logo>
      <StyledNavLink to="/">HATTA</StyledNavLink>
    </Logo>
    <NavigationList>
      <NavigationListItem>
        <StyledNavLink to="/articles">articles</StyledNavLink>
      </NavigationListItem>
      <NavigationListItem>
        <StyledNavLink to="/about">about</StyledNavLink>
      </NavigationListItem>
      <NavigationListItem>
        <StyledNavLink to="gallery">gallery</StyledNavLink>
      </NavigationListItem>
      <NavigationListItem>
        <StyledNavLink to="/contact">contact</StyledNavLink>
      </NavigationListItem>
    </NavigationList>
  </NavigationWrapper>
);

export default Navigation;
