import { FC } from "react";
import styled from 'styled-components';

const TextTag = styled.span<{ checked: boolean }>`
    text-decoration: ${prop => prop.checked ? 'line-through' : 'none'};
    color: ${prop => prop.checked ? '#aaa' : '#333'};
`

interface PropType {
    text: string,
    checked: boolean
}

export const TaskListItemText : FC<PropType> = ({ text, checked }) => {
    return (
        <TextTag checked={checked}>{ text }</TextTag>
    )
}