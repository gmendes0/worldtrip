import { Flex, Text } from "@chakra-ui/react";

interface QuantityInfoProps {
  quantity: number;
  label: string;
}

export function QuantityInfo({
  quantity,
  label,
}: QuantityInfoProps): JSX.Element {
  return (
    <Flex direction="column" justify="space-around" align="center">
      <Text
        fontWeight={600}
        fontSize={{ base: "4xl", md: "5xl" }}
        color="orange.300"
        m={0}
      >
        {quantity}
      </Text>
      <Text m={0} fontWeight={600} fontSize={{ base: "xl", md: "2xl" }}>
        {label}
      </Text>
    </Flex>
  );
}
