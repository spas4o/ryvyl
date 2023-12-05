import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { PaletteMode, colors } from "@mui/material";
import { CustomPalette } from "./commonTheme.d";

export const useCommonTheme = (mode: PaletteMode) => {
  // memoizing the result so it won't calculate every time
  const theme = useMemo(
    () =>
      createTheme({
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                margin: 0,
                mode,
                ...(mode === "light"
                  ? {
                      backgroundColor: colors.grey[100],
                    }
                  : {
                      backgroundColor: colors.orange[900],
                    }),
              },
            },
          },
        },
        palette: {
          primary: {
            main: mode === "light" ? colors.grey[600] : colors.orange[900],
            black: mode === "light" ? colors.grey[400] : colors.grey[900],
            white: mode === "light" ? colors.grey[800] : colors.grey[600],
            iconColor: mode === "light" ? colors.grey[900] : colors.grey[100],
          },
          mode, // Add the mode property to the palette object
        } as CustomPalette, // Assert the palette to the custom interface
      }),
    [mode]
  );

  return theme;
};
