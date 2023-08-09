import { FC } from "react"
import styled from 'styled-components';

const DeleteButtonTag = styled.span`
    cursor: pointer;
    font-weight: 500;
`
interface PropType {
    onDelete : () => void
}

export const DeleteButton : FC<PropType> = ({ onDelete }) => {
    return (
        <DeleteButtonTag onClick={onDelete} title="Apagar">x</DeleteButtonTag>
    )
}