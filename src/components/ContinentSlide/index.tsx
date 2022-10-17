import { Box, Link as ChakraLink, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

interface ContinentSlideProps {
  image: string;
  name: string;
  subtitle: string;
  id: number;
}

export function ContinentSlide({
  image,
  name,
  subtitle,
  id,
}: ContinentSlideProps): JSX.Element {
  return (
    <Box position="relative" h="100%" w="100%">
      <Box
        position="absolute"
        zIndex={5}
        top="calc(225px - ((1rem + var(--chakra-fontSizes-5xl) + var(--chakra-fontSizes-md)) / 2))" // {225}
        left={0}
        w="100%"
        textAlign="center"
      >
        <Link href={`/continents/${id}`} passHref>
          <ChakraLink
            p={0}
            m={0}
            fontWeight={700}
            fontSize="5xl"
            color="gray.50"
            href="#"
          >
            {name}
          </ChakraLink>
        </Link>

        <Text
          mt="1rem"
          p={0}
          m={0}
          fontWeight={700}
          fontSize="2xl"
          color="gray.100"
        >
          {subtitle}
        </Text>
      </Box>
      <Image src={image} width={1920} height={1080} />
    </Box>
  );
}
