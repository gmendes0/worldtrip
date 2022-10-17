import {
  Box,
  Container,
  Flex,
  Text,
  Image,
  Heading,
  Avatar,
} from "@chakra-ui/react";
import { NextPage } from "next";
// import Image from "next/image";
import Header from "../../components/Header";

const Continent: NextPage = () => {
  return (
    <>
      <Header />

      <Container maxW="8xl">
        <Box maxW={{ base: "100vw", lg: "8xl" }}>
          {/* <Image
          src="https://images.unsplash.com/photo-1581430872221-d1cfed785922?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          width={1440}
          height={500}
        /> */}
          <Image
            src="https://images.unsplash.com/photo-1581430872221-d1cfed785922?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            w="100%"
            height={550}
            objectFit="cover"
          />
          <Text>Europa</Text>
        </Box>

        <Flex>
          <Text>
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>

          <Flex>
            <Text>50</Text>
            <Text>países</Text>
          </Flex>
          <Flex>
            <Text>60</Text>
            <Text>línguas</Text>
          </Flex>
          <Flex>
            <Text>27</Text>
            <Text>cidades +100</Text>
          </Flex>
        </Flex>

        <Flex>
          <Heading>Cidades +100</Heading>

          <Flex>
            <Image src="https://images.unsplash.com/photo-1581430872221-d1cfed785922?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
            <Text>Londres</Text>
            <Flex>
              <Text>Reino Unido</Text>
              <Avatar name="Reino Unido" src="" />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default Continent;
