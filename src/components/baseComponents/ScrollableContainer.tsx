import { FC, ReactNode } from 'react'
import styled from 'styled-components'

const ContainerTag = styled.div`
    height: 100%;
    width: 100%;
    overflow-y: auto;
`

interface PropType {
    children: ReactNode
}

export const ScrollableContainer : FC<PropType> = ({ children }) => {
    return (
        <ContainerTag>
            { children }
        </ContainerTag>
    )
}