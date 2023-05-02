import { ContentContainer, FooterContainer, LegalText, Logo, NavigationContainer, NavigationLink } from "./styles";

function Footer() {
  return (
    <FooterContainer>
      <ContentContainer>
      © 2023 ChatGPT. Todos os direitos reservados. Termos de uso e política
        de privacidade.

        <NavigationContainer>
          <NavigationLink href="/">Home</NavigationLink>
          <NavigationLink href="/about">Sobre nós</NavigationLink>
          <NavigationLink href="/services">Serviços</NavigationLink>
          <NavigationLink href="/contact">Contato</NavigationLink>
        </NavigationContainer>
      </ContentContainer>
    </FooterContainer>
  );
}

export default Footer;
