import { render, screen} from '@testing-library/react'
import Logout from '../../../pages/user/logout'

describe('Logout', () => {
    it('renders a login component', () => {
        render(<Logout/>)

        const heading = screen.getByRole('link', {
            name: /logout/i,
        })

        expect(heading).toBeInTheDocument()
    })
})