import styled from 'styled-components'

enum AlertVariantsEnum {
    PRIMARY = 'primary',
    DANGER = 'danger'
}

type AlertVariants = `${AlertVariantsEnum}`

const AlertColors : Record<string,Record<string, string>> = {
    [AlertVariantsEnum.PRIMARY]: { backgroundColor: 'var(--primary-color-background)', color: 'var(--primary-color)'},
    [AlertVariantsEnum.DANGER] : { backgroundColor: 'var(--danger-color-background)', color: 'var(--danger-color)'}
}

export const TAlert = styled.span<{ variant?: AlertVariants}>`
    display: block;
    text-align: center;
    border-radius: var(--standard-form-border-radius);
    color: ${
        props => AlertColors[
            props.variant && Object.values(AlertVariantsEnum).includes(props.variant as AlertVariantsEnum) 
            ? props.variant 
            : AlertVariantsEnum.PRIMARY
        ].color
    };
    background-color: ${
        props => AlertColors[
            props.variant && Object.values(AlertVariantsEnum).includes(props.variant as AlertVariantsEnum) 
            ? props.variant 
            : AlertVariantsEnum.PRIMARY
        ].backgroundColor
    };
    border: 1px solid currentcolor;
    padding: 10px;
`