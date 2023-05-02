import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 40px 0;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Logo = styled.img`
  height: 40px;
`;

export const NavigationContainer = styled.nav`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const NavigationLink = styled.a`
  color: #333;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const LegalText = styled.p`
  color: #555;
  width: 80%;
  margin: auto;
  font-size: 14px;
  margin-top: 20px;
`;
