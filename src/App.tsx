import { AnimatePresence } from 'framer-motion'
import DecorLayout from './components/layout/decor-layout'
import Layout from './components/layout/layout'
import ThemeLayout from './components/layout/theme-layout'
import Control from './components/control/control'
import ContentWrapper from './components/content/content-wrapper'
import { DataProvider } from './provider/data.provider'

const App = () => {
  return (
    <AnimatePresence mode="wait">
      <ThemeLayout>
        <DecorLayout>
          <DataProvider>
            <Layout>
              <ContentWrapper />
              <Control />
            </Layout>
          </DataProvider>
        </DecorLayout>
      </ThemeLayout>
    </AnimatePresence>
  )
}

export default App
