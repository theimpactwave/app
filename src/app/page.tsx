import type { Metadata } from "next";

import DefaultLayout from "@/layouts/default";
import { Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Circle from "@/assets/img/circle.svg";

export const metadata: Metadata = {
  title: "Welcome to The Impact App",
  description: "The Impact App",
};

const Home = () => {
  return (
    <>
      <DefaultLayout>
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          w={"100%"}
          h={"100%"}
        >
          <Image src={Circle} alt={"The Impact Wave"} width={100} />
          <Heading mb={1}>theimpactwave.app</Heading>
          <Text>Coming soon...</Text>
        </Stack>
      </DefaultLayout>
    </>
  );
};

export default Home;
