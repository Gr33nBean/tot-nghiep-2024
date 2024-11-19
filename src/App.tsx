import { AnimatePresence } from 'framer-motion'
import DecorLayout from './components/layout/decor-layout'
import Layout from './components/layout/layout'
import ThemeLayout from './components/layout/theme-layout'
import Control from './components/control/control'
import ContentWrapper from './components/content/content-wrapper'
import { DataProvider } from './provider/data.provider'
import { Route, Routes, useLocation } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <DataProvider>
          <AppRouter />
        </DataProvider>
      </AnimatePresence>
    </BrowserRouter>
  )
}

export default App

function AppRouter() {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      <Route element={<ThemeLayout />}>
        <Route element={<DecorLayout />}>
          <Route element={<Layout />}>
            <Route path="/" element={<></>} />
            <Route
              path="/:user"
              element={
                <>
                  <ContentWrapper />
                  <Control />
                </>
              }
            />
          </Route>
        </Route>
      </Route>
    </Routes>
  )
}
