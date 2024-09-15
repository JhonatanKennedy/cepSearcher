import { screen, render } from '@testing-library/react'
import { App } from './App'

describe('dummyTest', () => {
    it('dumy', () => {
        expect(true).toBe(true)
    })

    it('Renders the main page', () => {
        render(<App />)
        const text = screen.getByText('teste')
        expect(text).toBeTruthy()
    })
})
