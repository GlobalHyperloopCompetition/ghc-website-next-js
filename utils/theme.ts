import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// Supports weights 100-900
import "@fontsource-variable/kumbh-sans";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  config,
  fonts: {
    heading: `'Kumbh Sans Variable', sans-serif`,
    body: `'Kumbh Sans Variable', sans-serif`,
  },
  colors: {
    red: {
      50: "#e3fffd",
      100: "#2DEADF",
      200: "#2ADFD4",
      300: "#27D4C9",
      400: "rgb(36,196,186)",
      500: "rgb(36,196,186,0.8)",
      600: "rgb(36,196,186,0.7)",
      700: "rgb(36,196,186,0.6)",
      800: "rgb(36,196,186,0.5)",
      900: "rgb(36,196,186,0.4)",
    },
  },
  components: {
    Checkbox: {
      baseStyle: {
        control: {
          borderColor: "gray.400", // Customize the border color
          borderWidth: "2px", // Customize the border width
          _hover: {
            borderColor: "gray.600", // Border color on hover
          },
        },
      },
    },
  },
});

export default theme;
