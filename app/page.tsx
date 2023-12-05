'use client'

import { useState, useMemo } from 'react';
import styles from './page.module.css'
import Login from '@/app/(pages)/login/page'
import { DARK, LIGHT } from '@/app/constants/common';
import { useCommonTheme } from '@/app/helper/commonTheme';
import { CssBaseline, PaletteMode } from '@mui/material'
import { ColorModeContextType } from './helper/commonTheme.d'
import { ColorModeContext } from './helper/Context';
import { ThemeProvider } from 'styled-components';

export default function Home() {

  const [mode, setMode] = useState<PaletteMode>(DARK);
  const colorMode:ColorModeContextType = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => (prevMode === LIGHT ? DARK : LIGHT))
      }
  }),[])
  
  const theme = useCommonTheme(mode)

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main className={styles.main}>
          <Login />
        </main>
    </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
