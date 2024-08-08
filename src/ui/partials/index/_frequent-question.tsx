import {
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from "@mui/material";
import {
  AccordionStyled,
  SectionContainer,
  SectionSubtitle,
  SectionTitle,
  Wave,
} from "./_frequent-question.styled";
import { useState } from "react";

const questionsList = [
  {
    question: "Dúvida 1",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ad aut repellat omnis totam iure illum fuga reprehenderit hic delectus, eaque nostrum quis ipsam. Dolore asperiores deleniti maxime labore voluptas!",
  },
  {
    question: "Dúvida 2",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ad aut repellat omnis totam iure illum fuga reprehenderit hic delectus, eaque nostrum quis ipsam. Dolore asperiores deleniti maxime labore voluptas!",
  },
  {
    question: "Dúvida 3",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ad aut repellat omnis totam iure illum fuga reprehenderit hic delectus, eaque nostrum quis ipsam. Dolore asperiores deleniti maxime labore voluptas!",
  },
  {
    question: "Dúvida 4",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ad aut repellat omnis totam iure illum fuga reprehenderit hic delectus, eaque nostrum quis ipsam. Dolore asperiores deleniti maxime labore voluptas!",
  },
];

const FrequentQuestion = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  function isOpen(accordionIndex: number): boolean {
    return activeAccordion === accordionIndex;
  }

  function changeOpenAccordion(accordionIndex: number): void {
    if (isOpen(accordionIndex)) {
      setActiveAccordion(0);
    } else {
      setActiveAccordion(accordionIndex);
    }
  }

  function getIcon(accordionIndex: number): string {
    return isOpen(accordionIndex) ? "twf-minus" : "twf-plus";
  }

  return (
    <SectionContainer>
      <Wave src={"/img/home/waves.svg"} />
      <Container>
        <SectionTitle>Ainda está com dúvidas ?</SectionTitle>
        <SectionSubtitle>Veja abaixo as perguntas frequentes</SectionSubtitle>
        {questionsList.map((item, index) => (
          <AccordionStyled
            key={index}
            expanded={isOpen(index + 1)}
            onChange={() => changeOpenAccordion(index + 1)}
          >
            <AccordionSummary expandIcon={<i className={getIcon(index + 1)} />}>
              <Typography color={"primary"}>{item.question}</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </AccordionStyled>
        ))}
      </Container>
    </SectionContainer>
  );
};

export default FrequentQuestion;
