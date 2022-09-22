import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    orange: {
      "300": "#FFBA08",
    },
    gray: {
      "50": "#F5F8FA",
      "100": "#DADADA",
      "400": "#999999",
      "600": "#47585B",
    },
  },
  styles: {
    global: {
      body: {
        fontFamily: "Poppins",
      },
    },
  },
});
