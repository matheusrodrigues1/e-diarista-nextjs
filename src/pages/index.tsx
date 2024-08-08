import Presentation from "@patials/index/_presentation";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

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
      <Presentation></Presentation>
    </div>
  );
};

export default Index;
