import { createContext, useContext } from "react";
import { ColorModeContextValue } from "./commonTheme.d";

export const ColorModeContext = createContext<ColorModeContextValue>({});

export const useColorMode = () => useContext(ColorModeContext);
