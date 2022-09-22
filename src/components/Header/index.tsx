import { Flex } from "@chakra-ui/react";
import Image from "next/image";

function Header(): JSX.Element {
  return (
    <Flex align="center" justify="center" py={{ base: "15px", md: "27px" }}>
      <Image src="/logo.svg" width={186.7} height={45.92} />
    </Flex>
  );
}

export default Header;
