import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { theme } from "../styles/theme";

import "../styles/global.css";
import "../styles/swiper.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
