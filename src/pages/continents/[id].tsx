import {
  Box,
  Container,
  Flex,
  Text,
  Image,
  Heading,
  Avatar,
  SimpleGrid,
  Spinner,
  HStack,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CityCard } from "../../components/CityCard";
// import Image from "next/image";
import Header from "../../components/Header";
import { QuantityInfo } from "../../components/QuantityInfo";
import { api } from "../../services/api";

type TContinent = {
  id: string;
  name: string;
  description: string;
  image: string;
  cities: Array<{
    name: string;
    country: {
      name: string;
    };
  }>;
};

type TContinentResponse = TContinent;

const Continent: NextPage = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [continent, setContinent] = useState<TContinent>();

  useEffect(() => {
    if (router.query.id)
      api
        .get<TContinentResponse>(`/continents/${router.query.id}`)
        .then((response) => {
          setContinent(response.data);
          setIsLoading(false);
          setIsError(false);
        })
        .catch((error) => {
          setIsLoading(false);
          setIsError(true);
        });
  }, [router.query]);

  if (isLoading)
    return (
      <>
        <Header />

        <Flex
          w="100%"
          h="100vh"
          overflow="hidden"
          justify="center"
          align="center"
        >
          <Spinner size="xl" color="orange.300" />
        </Flex>
      </>
    );

  if (isError)
    return (
      <>
        <Header />

        <Flex
          w="100%"
          h="100vh"
          overflow="hidden"
          justify="center"
          align="center"
        >
          <Text>Erro ao buscar as informações do continente.</Text>
        </Flex>
      </>
    );

  return (
    <>
      <Container maxW={{ base: "container.sm", xl: "8xl" }}>
        <Header />
        <Box maxW={{ base: "100vw", lg: "8xl" }} position="relative">
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
          <Heading
            position="absolute"
            bottom="60px"
            left={{ base: 30, xl: 140 }}
            p={0}
            m={0}
            fontWeight={600}
            fontSize="5xl"
            color="gray.50"
          >
            {continent?.name}
          </Heading>
        </Box>

        <Box mx={{ base: 30, xl: 140 }}>
          <Flex
            direction={{ base: "column", xl: "row" }}
            justify="space-between"
            align="center"
            my={{ base: "10px", xl: "80px" }}
          >
            <Text
              maxW={600}
              textAlign="justify"
              fontSize={{ base: "xl", md: "2xl" }}
            >
              {continent?.description}
            </Text>

            <HStack spacing={8}>
              <QuantityInfo quantity={50} label="países" />
              <QuantityInfo quantity={60} label="línguas" />
              <QuantityInfo quantity={27} label="cidades +100" />
            </HStack>
          </Flex>

          <Flex direction="column">
            <Heading>Cidades +100</Heading>

            <Flex>
              <SimpleGrid
                my={35}
                columns={4}
                spacing={10}
                minChildWidth="256px"
              >
                {continent?.cities.map((city) => (
                  <CityCard
                    city={city.name}
                    country={city.country.name}
                    image="https://images.unsplash.com/photo-1581430872221-d1cfed785922?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  />
                ))}
                {/* <CityCard
                  city="Londres"
                  country="Reino Unido"
                  image="https://images.unsplash.com/photo-1581430872221-d1cfed785922?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                />
                <CityCard
                  city="Londres"
                  country="Reino Unido"
                  image="https://images.unsplash.com/photo-1581430872221-d1cfed785922?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                />{" "}
                <CityCard
                  city="Londres"
                  country="Reino Unido"
                  image="https://images.unsplash.com/photo-1581430872221-d1cfed785922?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                />{" "}
                <CityCard
                  city="Londres"
                  country="Reino Unido"
                  image="https://images.unsplash.com/photo-1581430872221-d1cfed785922?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                />{" "}
                <CityCard
                  city="Londres"
                  country="Reino Unido"
                  image="https://images.unsplash.com/photo-1581430872221-d1cfed785922?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                />{" "}
                <CityCard
                  city="Londres"
                  country="Reino Unido"
                  image="https://images.unsplash.com/photo-1581430872221-d1cfed785922?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                /> */}
              </SimpleGrid>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </>
  );
};

export default Continent;
