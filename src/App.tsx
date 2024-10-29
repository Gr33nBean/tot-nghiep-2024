import { AnimatePresence } from 'framer-motion'
import DecorLayout from './components/layout/decor-layout'
import Layout from './components/layout/layout'
import ThemeLayout from './components/layout/theme-layout'
import Control from './components/control/control'

const App = () => {
  return (
    <AnimatePresence mode="wait">
      <ThemeLayout>
        <DecorLayout>
          <Layout>
            <div className="flex flex-1 items-center justify-center">Nội dung 1</div>

            <Control />
          </Layout>
        </DecorLayout>
      </ThemeLayout>
    </AnimatePresence>
  )
}

export default App
