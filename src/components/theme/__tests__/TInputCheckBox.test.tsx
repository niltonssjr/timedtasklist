import { ChangeEventHandler } from "react"
import { TInputCheckBox } from "../TInputCheckBox"
import { fireEvent, render, screen } from "@testing-library/react"

describe('Theme - TInputCheckBox', () => {
    let checkBox : HTMLInputElement
    let onChange : ChangeEventHandler = jest.fn()
    beforeEach(() => { jest.clearAllMocks()})
    test('Component rendered', () => {
        render(<TInputCheckBox 
                value={true} 
                onChange={onChange}
                data-testid="checkbox"
            />)
        checkBox = screen.getByTestId('checkbox')
        expect(checkBox).toBeInTheDocument()
    })
    test.each(
        [
            ['unchecked', 'false', { initialState: false, expectedValue: false,}],
            ['checked', 'true', { initialState: true, expectedValue: true,}],
        ]
    )('Component %s when value is %s', (firstArg, secondArg, { initialState, expectedValue}) => {
        render(
            <TInputCheckBox 
                value={initialState}
                onChange={onChange}
            />
        )
        const checkBox = screen.getByRole('checkbox') as HTMLInputElement
        expect(checkBox).toBeInTheDocument()
        expect(checkBox.checked).toEqual(expectedValue)
    })
    test.each(
        [
            ['<true>', 'unchecked', { initialState: false, expectedValue: true}],
            ['<false>', 'checked', { initialState: true, expectedValue: false}],
        ]
    )(
        'When clicked, Component triggers event with %s when %s',
        (firstArg, secondArg, { 
            initialState,
            expectedValue
        }) => {
            render (
                <TInputCheckBox
                value={initialState}
                onChange={onChange}
                data-testid="checkbox"
                />
            )
            const checkBox = screen.getByTestId('checkbox') as HTMLInputElement
            expect(checkBox).toBeInTheDocument()
            jest.clearAllMocks()
            fireEvent.click(checkBox)
            expect(onChange).toHaveBeenCalled()
        }
    )
})