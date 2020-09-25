export default {
  palette: {
    common: { black: "#000", white: "#fff" },
    background: { paper: "#fff", default: "#fafafa" },
    primary: {
      light: "#7986cb",
      main: "rgba(81, 99, 197, 1)",
      dark: "#303f9f",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff4081",
      main: "rgba(226, 55, 55, 1)",
      dark: "#c51162",
      contrastText: "#fff"
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff"
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)"
    }
  },
  // palette: {
  //   primary: {
  //     light: "#ffac33",
  //     main: "#ff9800",
  //     dark: "#b26a00",
  //     contrastText: "#fff"
  //   },
  //   secondary: {
  //     light: "#ff6333",
  //     main: "#ff6333",
  //     dark: "#b22a00",
  //     contrastText: "#000"
  //   }
  // },
  spreadThis: {
    typography: {
      useNextVariants: true
    },
    form: {
      textAlign: "center"
    },
    image: {
      margin: "20px auto 20px auto"
    },
    pageTitle: {
      margin: "10px auto 10px auto"
    },
    textField: {
      margin: "10px auto 10px auto"
    },
    button: {
      marginTop: 20,
      position: "relative"
    },
    customError: {
      color: "red",
      fontSize: "0.8rem",
      marginTop: 10
    },
    progress: {
      position: "absolute"
    },
    invisibleSeparator: {
      border: "none",
      margin: 4
    },
    visibleSeparator: {
      width: "100%",
      borderBottom: "1px solid rgba(0,0,0,0.1)",
      marginBottom: 20
    }
  }
};
