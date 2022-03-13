import { render, screen} from '@testing-library/react'
import Login from '../pages/index'

describe('Login', () => {
    it('renders a login component', () => {
        render(<Login />)

        const heading = screen.getByRole('heading', {
            name: /Login/i,
        })
        const email = screen.getByText('Email:')
        const password = screen.getByText('Password:')
        const submitBtn = screen.getByRole('button', {
            name: /login/i
        })

        expect(heading).toBeInTheDocument()
        expect(email).toBeInTheDocument()
        expect(password).toBeInTheDocument()
        expect(submitBtn).toBeInTheDocument()
    })
})