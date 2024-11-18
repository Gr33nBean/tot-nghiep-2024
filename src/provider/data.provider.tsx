import { MAX_STEP } from '@/components/content/content-wrapper'
import { getPhoto } from '@/utils/local-storage'
import { createContext, useContext, useState, ReactNode, useCallback } from 'react'

interface DataContextType {
  step: number
  handleStepChange: (isNext: boolean) => void
  filter: { brightness: number; contrast: number; saturation: number }
  setFilter: (filter: { brightness: number; contrast: number; saturation: number }) => void
  isPhoto?: string
  setIsPhoto: (isPhoto?: string) => void
  gameStep: number
  setGameStep: (gameStep: number) => void
  name?: string
  setName: (name?: string) => void
}

const DataContext = createContext<DataContextType | undefined>(undefined)

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const photo = getPhoto()
  const [step, setStep] = useState<number>(photo ? MAX_STEP - 1 : 0)

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

  const [isPhoto, setIsPhoto] = useState<string | undefined>(photo?.link ?? undefined)

  const [gameStep, setGameStep] = useState<number>(0)

  const [name, setName] = useState<string | undefined>(photo?.name ?? undefined)

  return (
    <DataContext.Provider
      value={{ step, handleStepChange, filter, setFilter, isPhoto, setIsPhoto, gameStep, setGameStep, name, setName }}
    >
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
