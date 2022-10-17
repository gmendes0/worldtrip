import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

function Header(): JSX.Element {
  return (
    <Flex align="center" justify="center" py={{ base: "15px", md: "27px" }}>
      <Link href="/">
        <Image
          src="/logo.svg"
          width={186.7}
          height={45.92}
          style={{ cursor: "pointer" }}
        />
      </Link>
    </Flex>
  );
}

export default Header;
