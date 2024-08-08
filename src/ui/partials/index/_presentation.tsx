import {
  ContainerStyled,
  SectionButton,
  SectionContainer,
  SectionSubtitle,
  SectionTitle,
} from "./_presentation.styled";

const Presentation = () => {
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
      </ContainerStyled>
    </SectionContainer>
  );
};

export default Presentation;
