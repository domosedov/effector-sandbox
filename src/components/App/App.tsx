import React, { FC } from 'react'
import { Todos } from '../Todos'

export const App: FC = () => {
  return (
    <div className='min-h-screen'>
      <Todos />
    </div>
  )
}
