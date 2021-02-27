import React from 'react'
import { App } from '..'
import { screen, render } from '@testing-library/react'

test('first test', () => {
  render(<App />)

  screen.debug()
})
