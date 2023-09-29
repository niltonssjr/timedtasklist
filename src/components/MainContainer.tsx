import React, { FC } from 'react'
import styled from 'styled-components'
import { TCard } from './theme'

const ContainerTag = styled.div`
    box-sizing: border-box;    
    height: 100vh;
    width: 100vw;
    padding: 10px;
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 15px;
`

const Pane = styled(TCard)`
    height: 100%;
`
interface Props {
    children: React.ReactNode[]
}

export const MainContainer : FC<Props> = ({ children }) => {
    const [leftPane, rightPane ] = children
    return (
        <ContainerTag>
            <Pane>
                {leftPane}
            </Pane>
            <Pane>
                {rightPane}
            </Pane>
        </ContainerTag>
    )
}
