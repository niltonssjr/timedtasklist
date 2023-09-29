import { FC, MouseEventHandler } from "react"
import styled from 'styled-components';

const TDeleteButtonTag = styled.span`
    cursor: pointer;
    font-weight: 500;
`
interface PropType {
    onDelete : MouseEventHandler
}

export const TDeleteButton : FC<PropType> = ({ onDelete, ...otherParameters }) => {
    return (
        <TDeleteButtonTag onClick={onDelete} title="Apagar" {...otherParameters}>x</TDeleteButtonTag>
    )
}
