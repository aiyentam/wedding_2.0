import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F6CFCA",
      light: "#FFFFFF",
      dark: "#B86B77"
    },
    secondary: {
      main: "#F7B900",
      dark: "#E0AB0D"
    },
    grey: {
      100: "F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E"
    }
  }
});

export default theme;
