// simple test with React Testing Library
// http://localhost:3000/counter

import * as React from 'react'
// 🐨 import the `render` and `fireEvent` utilities from '@testing-library/react'
import Counter from '../../components/counter'
import {fireEvent, render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('counter increments and decrements when the buttons are clicked', async () => {
  // 💣 remove these two lines, React Testing Library will create the div for you

  // 🐨 swap createRoot and root.render with React Testing Library's render
  // Note that React Testing Library's render doesn't need you to pass a `div`
  // so you only need to pass one argument. render returns an object with a
  // bunch of utilities on it. For now, let's just grab `container` which is
  // the div that React Testing Library creates for us.
  const {container} = render(<Counter />)

  // 🐨 instead of `div` here you'll want to use the `container` you get back
  // from React Testing Library
  const message = container.firstChild.querySelector('div')
  const increment = screen.getByRole('button', {name: /increment/i})
  const decrement = screen.getByRole('button', {name: /decrement/i})
  expect(message.textContent).toBe('Current count: 0')

  await userEvent.click(increment)
  expect(message.textContent).toBe('Current count: 1')
  await userEvent.click(decrement)
  expect(message.textContent).toBe('Current count: 0')
})
