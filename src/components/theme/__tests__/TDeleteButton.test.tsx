
import { fireEvent, render, screen } from "@testing-library/react"
import { TDeleteButton } from "../TDeleteButton"

describe('Delete Button', () => {
    let deleteButton
    let onDelete = jest.fn()
    beforeEach(() => {
        jest.clearAllMocks()     
    })
    test('Delete button exists', () => {
        render(<TDeleteButton 
                onDelete={onDelete}
                data-testid="delete-button"
            />)
        deleteButton = screen.getByTestId('delete-button')
        expect(deleteButton).toBeInTheDocument()
    })
    test('Delete button triggers method when it is clicked', () => {
        render(<TDeleteButton 
                onDelete={onDelete}
                data-testid="delete-button"
            />)
        deleteButton = screen.getByTestId('delete-button')
        fireEvent.click(deleteButton)
        expect(onDelete).toHaveBeenCalledTimes(1)
    })    
})