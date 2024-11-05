import { MAX_STEP, SWIPE_CONTAINER } from '@/components/content/content-wrapper'
import { wait } from '@/utils/common'
import { createContext, useContext, useState, ReactNode, useCallback } from 'react'

interface DataContextType {
  step: number
  handleSetStep: (step: number) => void
  handleStepChange: (isNext: boolean) => void
}

const DataContext = createContext<DataContextType | undefined>(undefined)

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState<number>(0)

  const handleSetStep = useCallback((newStep: number) => {
    const el = document.getElementById(SWIPE_CONTAINER) as HTMLDivElement
    if (!el || el.dataset.prevent === 'true') return
    setStep(newStep)
  }, [])

  const handleStepChange = useCallback(
    async (isNext: boolean) => {
      const el = document.getElementById(SWIPE_CONTAINER) as HTMLDivElement
      if (!el) return
      let value = isNext ? step + 1 : step - 1
      if (value < 0 || value > MAX_STEP - 1) {
        return
      }
      el.dataset.prevent = 'false'
      await wait(100)
      el.scrollTo({
        left: value * el.clientWidth,
        behavior: 'smooth',
      })
      setStep(value)
      el.dataset.prevent = 'true'
    },
    [step]
  )

  return <DataContext.Provider value={{ step, handleSetStep, handleStepChange }}>{children}</DataContext.Provider>
}

export const useData = (): DataContextType => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useData must be used within a DataProvider')
  }
  return context
}
