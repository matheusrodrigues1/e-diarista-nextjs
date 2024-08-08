import { Avatar, Container, ListItem, ListItemAvatar } from "@mui/material";
import {
  AvatarStyled,
  GradientBackground,
  ListItemTextStyled,
  ListStyle,
  SectionTitle,
} from "./_advantages.style";

const Advantages = () => {
  return (
    <GradientBackground>
      <Container>
        <SectionTitle>Por que usar o E-diarista?</SectionTitle>
        <ListStyle>
          <ListItem>
            <ListItemAvatar>
              <AvatarStyled></AvatarStyled>
            </ListItemAvatar>
            <ListItemTextStyled primary={"Deversidade"} secondary={"5mil"} />
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <AvatarStyled></AvatarStyled>
            </ListItemAvatar>
            <ListItemTextStyled primary={"Deversidade"} secondary={"5mil"} />
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <AvatarStyled></AvatarStyled>
            </ListItemAvatar>
            <ListItemTextStyled primary={"Deversidade"} secondary={"5mil"} />
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <AvatarStyled></AvatarStyled>
            </ListItemAvatar>
            <ListItemTextStyled primary={"Deversidade"} secondary={"5mil"} />
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <AvatarStyled></AvatarStyled>
            </ListItemAvatar>
            <ListItemTextStyled primary={"Deversidade"} secondary={"5mil"} />
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <AvatarStyled></AvatarStyled>
            </ListItemAvatar>
            <ListItemTextStyled primary={"Deversidade"} secondary={"5mil"} />
          </ListItem>
        </ListStyle>
      </Container>
    </GradientBackground>
  );
};

export default Advantages;
