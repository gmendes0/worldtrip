import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

interface TripTypeProps {
  label: string;
  image: string;
  alt: string;
}

function TripType({ label, image, alt }: TripTypeProps): JSX.Element {
  return (
    <Flex direction="column" align="center">
      <Image src={image} alt={alt} width={85} height={85} />
      <Text pt="24px" fontWeight={600} fontSize="24px" color="gray.600">
        {label}
      </Text>
    </Flex>
  );
}

export default TripType;
