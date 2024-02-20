import { createContext, useContext, useMemo, useState } from "react";
import { Switch } from "@mui/material";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

function Component() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.secondary",
      }}
    >
      toggle between modes
      <span>({theme.palette.mode})</span>
      <Switch
        checked={theme.palette.mode === "dark"}
        onChange={colorMode.toggleColorMode}
      />
    </Box>
  );
}

export default function ToggleMode() {
  const [mode, setMode] = useState("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Component />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
