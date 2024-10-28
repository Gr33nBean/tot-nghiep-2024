import { AnimatePresence } from 'framer-motion'
import DecorLayout from './components/layout/decor-layout'
import Layout from './components/layout/layout'
import ThemeLayout from './components/layout/theme-layout'

const App = () => {
  return (
    <AnimatePresence mode="wait">
      <ThemeLayout>
        <DecorLayout>
          <Layout>
            <div className="">huy</div>
          </Layout>
        </DecorLayout>
      </ThemeLayout>
    </AnimatePresence>
  )
}

export default App
