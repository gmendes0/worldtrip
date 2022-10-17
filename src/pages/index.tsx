import {
  Box,
  Flex,
  HStack,
  Text,
  Divider,
  Link as ChakraLink,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";

import Header from "../components/Header";
import TripType from "../components/TripType";
import { NavigationOptions, PaginationOptions } from "swiper/types";

// import bannerImage from "../../public/Background.png";

const Home: NextPage = () => {
  const pagination: PaginationOptions = {
    bulletClass: "swiper-pagination-bullet my-bullet",
  };

  return (
    <>
      <Head>
        <title>Home | World Trip</title>
      </Head>

      <Header />

      <Flex
        direction="row"
        align="center"
        bgImage="/Background.png"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        py="80px"
        position="relative"
      >
        <Flex
          w={1240}
          minW={1024}
          direction="row"
          align="center"
          justify="space-between"
          mx="auto"
        >
          <Flex direction="column" maxW={524}>
            <Text fontSize="4xl" fontWeight={500} color="gray.100">
              5 Continentes, infinitas possibilidades.
            </Text>
            <Text fontSize="xl" fontWeight={400} color="gray.100" mt="1.25rem">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>

            <Box
              position="absolute"
              bottom="-40px"
              right="calc(((1240px - 100vw)/2) * -1)"
            >
              <Image src="/airplane.svg" width={417.15} height={270.74} />
            </Box>
          </Flex>

          <Box />
        </Flex>
      </Flex>

      <HStack py="80px" spacing={40} w={1240} minW={1024} mx="auto">
        <TripType image="/cocktail-1.svg" alt="Bebida" label="vida noturna" />
        <TripType image="/surf-1.svg" alt="prancha de surf" label="praia" />
        <TripType image="/building-1.svg" alt="prédio" label="moderno" />
        <TripType image="/museum-1.svg" alt="museu" label="clássico" />
        <TripType image="/earth-1.svg" alt="planeta" label="e mais..." />
      </HStack>

      <Divider
        w={90}
        mx="auto"
        borderColor="gray.600"
        borderBottomWidth="2px"
      />

      <Flex direction="column" w="100%" align="center" my="3.25rem">
        <Text fontSize="4xl" fontWeight={500} color="gray.600">
          Vamos nessa?
        </Text>
        <Text fontSize="4xl" fontWeight={500} color="gray.600">
          Então escolha seu continente
        </Text>
      </Flex>

      <Flex w="100%" align="center" mb="3.25rem">
        <Swiper
          pagination={pagination}
          navigation={true}
          modules={[Navigation, Pagination]}
          className="mySwiper"
          style={{
            maxWidth: 1024,
            maxHeight: 450,
          }}
        >
          <SwiperSlide>
            <Box position="relative" h="100%" w="100%">
              <Box
                position="absolute"
                zIndex={5}
                top="calc(225px - ((1rem + var(--chakra-fontSizes-5xl) + var(--chakra-fontSizes-md)) / 2))" // {225}
                left={0}
                w="100%"
                textAlign="center"
              >
                <ChakraLink
                  // position="absolute"
                  // zIndex={5}
                  // top={225}
                  // left={0}
                  // w="100%"
                  // textAlign="center"
                  p={0}
                  m={0}
                  // lineHeight={0}
                  fontWeight={700}
                  fontSize="5xl"
                  color="gray.50"
                  href="#"
                >
                  América do Norte
                </ChakraLink>

                <Text
                  mt="1rem"
                  p={0}
                  m={0}
                  // lineHeight={0}
                  fontWeight={700}
                  fontSize="2xl"
                  color="gray.100"
                >
                  O continente mais antigo
                </Text>
              </Box>
              <Image src="/rj.jpg" width={1920} height={1080} />
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Image src="/south-america.jpg" width={1920} height={1080} />
          </SwiperSlide>
        </Swiper>
      </Flex>
    </>
  );
};

export default Home;
