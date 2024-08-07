import { Box, List, Typography } from "@mui/material";
import {
  AppList,
  FooterContainer,
  FooterGrid,
  FooterListItem,
  FooterSocialList,
  FooterTitle,
  SocialButton,
  SocialContainer,
} from "./Footer.styled";
import Link from "ui/components/navigation/Link/Link";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <div>
          <FooterTitle>Menu</FooterTitle>
          <List>
            <FooterListItem>
              <Link
                href="/encontrar-diarista"
                mui={{ color: "inherit", variant: "body2" }}
              >
                Encontre um diarista
              </Link>
            </FooterListItem>
            <FooterListItem>
              <Link
                href="/encontrar-diarista"
                mui={{ color: "inherit", variant: "body2" }}
              >
                Seja um diarista
              </Link>
            </FooterListItem>
            <FooterListItem>
              <Link href="/" mui={{ color: "inherit", variant: "body2" }}>
                Por que usar o e-diarista
              </Link>
            </FooterListItem>
            <FooterListItem>
              <Link href="/" mui={{ color: "inherit", variant: "body2" }}>
                Principais Duvidas
              </Link>
            </FooterListItem>
          </List>
        </div>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>Quem somos</FooterTitle>
          <Typography variant="body2" sx={{ mt: 2 }}>
            E-diaristas te ajuda a encontrar um profissional perfeito para
            realizar a limpeza da sua casa. Garantimos o melhor profissional com
            total segurança e praticidade!
          </Typography>
        </Box>
        <SocialContainer>
          <div>
            <FooterTitle>Baixe nossos aplicativos</FooterTitle>
            <AppList>
              <li>
                <a href="#" target={"_blank"} rel={"noopener noreferrer"}>
                  <img src="/img/logos/app-store.png" alt="appstore" />
                </a>
              </li>
              <li>
                <a href="#" target={"_blank"} rel={"noopener noreferrer"}>
                  <img src="/img/logos/google-play.png" alt="appstore" />
                </a>
              </li>
            </AppList>
          </div>
          <div>
            <FooterTitle>Redes sociais</FooterTitle>
            <FooterTitle>
              <FooterSocialList>
                <FooterListItem>
                  <SocialButton href="/">
                    <i className="twf-facebook-f" />
                  </SocialButton>
                </FooterListItem>
                <FooterListItem>
                  <SocialButton href="/">
                    <i className="twf-instagram" />
                  </SocialButton>
                </FooterListItem>
                <FooterListItem>
                  <SocialButton href="/">
                    <i className="twf-youtube" />
                  </SocialButton>
                </FooterListItem>
              </FooterSocialList>
            </FooterTitle>
          </div>
        </SocialContainer>
      </FooterGrid>
    </FooterContainer>
  );
};

export default Footer;
