import { render, screen} from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
    it('renders homepage ', () => {
        render(<Home />)

        const heading = screen.getByRole('heading', {
            name: /Homepage/i,
        })

        expect(heading).toBeInTheDocument()
    })
})