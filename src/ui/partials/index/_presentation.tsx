import { useEffect, useState } from "react";
import {
  ButtonBottom,
  ContainerStyled,
  SectionButton,
  SectionContainer,
  SectionPictureContainer,
  SectionSubtitle,
  SectionTitle,
} from "./_presentation.styled";

const Presentation = () => {
  const [cleanerPicture, setCleanerPicture] = useState("");

  useEffect(() => {
    const newCleanPicture =
      Math.random() < 0.5
        ? "/img/home/housekeeper.png"
        : "/img/home/janitor.png";
    setCleanerPicture(newCleanPicture);
  }, []);

  return (
    <SectionContainer>
      <ContainerStyled>
        <SectionTitle>
          Encontre agora mesmo um(a) <em>diarista</em>
          <i className="twf-search" />
        </SectionTitle>

        <SectionSubtitle>
          São mais de 5 mil profissionais esperando por você!
        </SectionSubtitle>

        <SectionButton
          href="/encontrar-diarista"
          mui={{ variant: "contained" }}
        >
          Encontre um(a) diarista
        </SectionButton>

        <SectionPictureContainer>
          <img src={cleanerPicture} alt="" />
        </SectionPictureContainer>
      </ContainerStyled>
      <ButtonBottom>
        <i className="twf-caret-down" />
      </ButtonBottom>
    </SectionContainer>
  );
};

export default Presentation;
