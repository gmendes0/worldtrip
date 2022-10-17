import { Avatar, Flex, Image, Text } from "@chakra-ui/react";

interface CityCardProps {
  image: string;
  city: string;
  country: string;
  flag?: string;
}

export function CityCard({
  image,
  city,
  country,
  flag,
}: CityCardProps): JSX.Element {
  return (
    <Flex
      maxW="256px"
      // height="279px"
      direction="column"
      justify="space-between"
      bg="white"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="rgba(255, 186, 8, 0.5)"
      borderRadius="4px"
    >
      <Image src={image} borderTopRadius="4px" />
      <Flex align="center" justify="space-between" p="24px">
        <Flex direction="column" justify="space-around">
          <Text fontWeight={600} fontSize="xl" color="gray.600" m={0}>
            {city}
          </Text>
          <Text color="gray.400" fontSize="md" fontWeight={500} m={0}>
            {country}
          </Text>
        </Flex>

        <Avatar name={country} src={flag} />
      </Flex>
    </Flex>
  );
}
