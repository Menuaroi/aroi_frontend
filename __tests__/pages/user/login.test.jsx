import { render, screen} from '@testing-library/react'
import Login from '../../../pages/user/login'

describe('Login', () => {
    it('renders a login component', () => {
        render(<Login/>)

        const heading = screen.getByRole('link', {
            name: /login/i,
        })

        expect(heading).toBeInTheDocument()
    })
})