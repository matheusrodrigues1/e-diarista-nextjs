import { Avatar, Container, ListItem, ListItemAvatar } from "@mui/material";
import {
  AvatarStyled,
  GradientBackground,
  ListDivider,
  ListItemTextStyled,
  ListStyle,
  SectionTitle,
} from "./_advantages.style";
import React from "react";

const Advantages = () => {
  const advantagesList = [
    {
      icon: "twf-woman",
      title: "Diversidade",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, non.",
    },
    {
      icon: "twf-certificate",
      title: "Confiabilidade",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, non.",
    },
    {
      icon: "twf-search-2",
      title: "Rastreabilidade",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, non.",
    },
    {
      icon: "twf-frame-broken",
      title: "Segurança",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, non.",
    },
    {
      icon: "twf-payment",
      title: "Controle",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, non.",
    },
    {
      icon: "twf-broom-bucket",
      title: "Experiência",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, non.",
    },
  ];
  return (
    <GradientBackground>
      <Container>
        <SectionTitle>Por que usar o E-diarista?</SectionTitle>
        <ListStyle>
          {advantagesList.map((item, index) => {
            return (
              <React.Fragment key={item.icon}>
                {index !== 0 && <ListDivider />}
                <ListItem>
                  <ListItemAvatar>
                    <AvatarStyled>
                      <i className={item.icon}></i>
                    </AvatarStyled>
                  </ListItemAvatar>
                  <ListItemTextStyled
                    primary={item.title}
                    secondary={item.description}
                  />
                </ListItem>
              </React.Fragment>
            );
          })}
        </ListStyle>
      </Container>
    </GradientBackground>
  );
};

export default Advantages;
