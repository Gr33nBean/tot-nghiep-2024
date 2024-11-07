import { MAX_STEP } from '@/components/content/content-wrapper'
import { createContext, useContext, useState, ReactNode, useCallback } from 'react'

interface DataContextType {
  step: number
  handleStepChange: (isNext: boolean) => void
  filter: { brightness: number; contrast: number; saturation: number }
  setFilter: (filter: { brightness: number; contrast: number; saturation: number }) => void
  isPhoto: boolean
  setIsPhoto: (isPhoto: boolean) => void
}

const DataContext = createContext<DataContextType | undefined>(undefined)

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState<number>(0)

  const handleStepChange = useCallback(
    async (isNext: boolean) => {
      let value = isNext ? step + 1 : step - 1
      if (value < 0 || value > MAX_STEP - 1) {
        return
      }
      setStep(value)
    },
    [step]
  )

  const [filter, setFilter] = useState({ brightness: 100, contrast: 100, saturation: 100 })

  const [isPhoto, setIsPhoto] = useState(false)

  return (
    <DataContext.Provider value={{ step, handleStepChange, filter, setFilter, isPhoto, setIsPhoto }}>
      {children}
    </DataContext.Provider>
  )
}

export const useData = (): DataContextType => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useData must be used within a DataProvider')
  }
  return context
}
