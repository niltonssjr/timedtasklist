import styled from 'styled-components'

enum ButtonVariantsEnum {
    PRIMARY = 'primary',
    DARK = 'dark',
    LIGHT = 'light',
    DANGER = 'danger',
}

type ButtonVariants = `${ButtonVariantsEnum}`

const buttonColors : Record<string, Record<string, string>> = {
    [ButtonVariantsEnum.PRIMARY] : { backgroundColor: 'var(--primary-color)', color: 'white'},
    [ButtonVariantsEnum.DARK] : { backgroundColor: 'var(--dark-color)', color: 'white'},
    [ButtonVariantsEnum.LIGHT] : { backgroundColor: 'var(--light-color)', color: 'black'},
    [ButtonVariantsEnum.DANGER] : { backgroundColor: 'var(--danger-color)', color: 'white'}
}

export const TButton = styled.button<{ variant?: ButtonVariants }>`
    --button-font-color: ${
        prop => buttonColors[
            prop.variant && Object.values(ButtonVariantsEnum).includes(prop.variant as ButtonVariantsEnum) ? prop.variant : ButtonVariantsEnum.PRIMARY
        ].color
    };
    --button-background-color: ${
        prop => buttonColors[
            prop.variant && Object.values(ButtonVariantsEnum).includes(prop.variant as ButtonVariantsEnum)? prop.variant : ButtonVariantsEnum.PRIMARY
        ].backgroundColor
    };
    border-radius: var(--standard-form-border-radius);    
    outline: none;
    background-color: var(--button-background-color);
    color: var(--button-font-color);
    font-weight: 500;
    border: 1px solid var(--button-background-color);
    cursor: pointer;
    &:hover { opacity: 0.9; }
    transition: ease opacity 0.15s;
    text-align: center;
`
