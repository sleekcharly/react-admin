import { CssBaseline, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Bar from './scenes/bar';
import Contacts from './scenes/contacts';
import Dashboard from './scenes/dashboard';
import Form from './scenes/form';
import Sidebar from './scenes/global/Sidebar';
import Topbar from './scenes/global/Topbar';
import Invoices from './scenes/invoices';
import Team from './scenes/team';
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
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
