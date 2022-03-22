import { render, screen} from '@testing-library/react'
import Profile from '../../../pages/user/profile'

jest.mock('@auth0/nextjs-auth0', () => ({
    useUser: () => ({
        user: {
            name: "username",
            email: "email"
        },
        isLoading: false
    })
}))

describe('Profile', () => {
    it('renders a Profile component', () => {
        render(<Profile/>)

        const username = screen.getByRole('heading', {
            name: /username/i,
        })
        const email = screen.getByText('email')

        expect(username).toBeInTheDocument()
        expect(email).toBeInTheDocument();
    })
})