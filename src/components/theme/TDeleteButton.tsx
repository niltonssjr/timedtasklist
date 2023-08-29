import { FC } from "react"
import styled from 'styled-components';

const TDeleteButtonTag = styled.span`
    cursor: pointer;
    font-weight: 500;
`
interface PropType {
    onDelete : () => void
}

export const TDeleteButton : FC<PropType> = ({ onDelete }) => {
    return (
        <TDeleteButtonTag onClick={onDelete} title="Apagar">x</TDeleteButtonTag>
    )
}
