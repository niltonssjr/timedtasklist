import React, { FC } from 'react'
import styled from 'styled-components'
import { Card } from './baseComponents/Card'

const ContainerTag = styled.div`
    padding: 10px;
    display: grid;
    grid-template-columns: 56.5% 40%;
    grid-gap: 15px;
`

const Pane = styled(Card)`
    height: calc(100vh - 20px);
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