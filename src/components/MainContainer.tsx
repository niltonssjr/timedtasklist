import { FC } from 'react'
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

interface ContainerProps {
    leftPane: FC,
    rightPane: FC
}

export const MainContainer : FC<ContainerProps> = ({ leftPane: LeftPane, rightPane: RightPane }) => {
    return (
        <ContainerTag>
            <Pane>
                <LeftPane/>
            </Pane>
            <Pane>
                <RightPane/>
            </Pane>
        </ContainerTag>
    )
}