import { Box, List, Typography } from "@mui/material";
import {
  FooterContainer,
  FooterGrid,
  FooterListItem,
  FooterTitle,
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
        <FooterTitle>Baixe nossos aplicativos</FooterTitle>
      </FooterGrid>
    </FooterContainer>
  );
};

export default Footer;
