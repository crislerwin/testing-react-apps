// simple test with ReactDOM
// 💯 use dispatchEvent
// http://localhost:3000/counter

import * as React from 'react'
import {act} from 'react-dom/test-utils'
import {createRoot} from 'react-dom/client'
import Counter from '../../components/counter'

// NOTE: this is a new requirement in React 18
// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#configuring-your-testing-environment
// Luckily, it's handled for you by React Testing Library :)
global.IS_REACT_ACT_ENVIRONMENT = true

test('counter increments and decrements when the buttons are clicked', () => {
  const div = document.createElement('div')
  document.body.append(div)

  const root = createRoot(div)
  act(() => root.render(<Counter />))
  div.querySelectorAll('button')
  div.firstChild.querySelector('div')
  const [decrement, increment] = div.querySelectorAll('button')
  const message = div.firstChild.querySelector('div')
  act(() => increment.click())
  expect(message.textContent).toBe('Current count: 1')
  act(() => decrement.click())
  expect(message.textContent).toBe('Current count: 0')
})
