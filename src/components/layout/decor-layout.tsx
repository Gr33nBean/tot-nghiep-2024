import { I2024, IGraduation, IHat } from '@/constants/icons'
import React from 'react'
import Baloons from './decor/baloons'

const DecorLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div
        className="fixed right-0 top-0 -translate-y-[40%] translate-x-[24%] text-secondary"
        style={{
          width: 'calc(max(34dvw, 34dvh))',
          maxWidth: '70dvw',
        }}
      >
        <IHat />
      </div>
      <div
        className=" fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-secondary"
        style={{
          width: 'calc(min(30dvw, 30dvh))',
        }}
      >
        <I2024 />
      </div>
      <div
        className="fixed -bottom-0.5 -left-0.5 text-secondary"
        style={{
          width: 'calc(max(24dvw, 24dvh))',
          maxWidth: '70dvw',
        }}
      >
        <IGraduation />
      </div>

      <Baloons />
      {children}
    </>
  )
}

export default DecorLayout
