import { CssBaseline, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './scenes/dashboard';
import Sidebar from './scenes/global/Sidebar';
import Topbar from './scenes/global/Topbar';
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

          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
