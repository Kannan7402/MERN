import {fireEvent, render , screen} from '@testing-library/react'
import FocusInput from '../components/useRef'

test('input focuses',()=>
{
    render(<FocusInput />)
    const input = screen.getByRole('textbox')
    const button = screen.getByText(/Focus Input/)

    fireEvent.click(button);
    
    expect (input).toHaveFocus();
})

