import { render, screen} from '@testing-library/react'
import Home from '../pages/index'

jest.mock('../pages/user/login', () => ({
    __esModule: true,
    default: () => <h1>Login</h1>
}))
jest.mock('../pages/user/logout', () => ({
    __esModule: true,
    default: () => <h1>logout</h1>
}))
jest.mock('../pages/user/profile', () => ({
    __esModule: true,
    default: () => <h1>profile</h1>
}))

describe('Home', () => {
    it('renders homepage ', () => {
        render(<Home />)

        const loginBtn = screen.getByRole('heading', {
            name: /Login/i,
        })
        const logoutBtn = screen.getByRole('heading', {
            name: /Logout/i,
        })
        const profileBtn = screen.getByRole('heading', {
            name: /Profile/i,
        })
        expect(loginBtn).toBeInTheDocument()
        expect(logoutBtn).toBeInTheDocument()
        expect(profileBtn).toBeInTheDocument()
    })
})