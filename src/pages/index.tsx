import Advantages from "@patials/index/_advantages";
import FrequentQuestion from "@patials/index/_frequent-question";
import Presentation from "@patials/index/_presentation";
import type { GetStaticProps, NextPage } from "next";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "",
    },
  };
};

const Index: NextPage<{ title: string }> = (props) => {
  return (
    <div>
      <Presentation />
      <Advantages />
      <FrequentQuestion />
    </div>
  );
};

export default Index;
