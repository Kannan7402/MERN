import { render,screen } from "@testing-library/react";
import Input from "./input";

test('appear login',()=>
{
    render(<Input/>)
    expect(screen.queryByText(/Login/)).toBeInTheDocument();
})

test('input field',()=>
{
    render(<Input/>)
    expect(screen.queryByPlaceholderText(/Name/)).toBeInTheDocument();
})