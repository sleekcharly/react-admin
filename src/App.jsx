import { CssBaseline, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import Sidebar from './scenes/global/Sidebar';
import { ColorModeContext, useMode } from './theme';

//  app component
export default function App() {
  // get theme and color mode
  const [theme, colorMode] = useMode();

  //    set state for sidebar
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
