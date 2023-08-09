import styled from 'styled-components'
import { InputText } from './baseComponents/InputText'
import { TSquareButton } from './baseComponents/TSquareButton'
import { addTask } from '../features/task/task'
import { useDispatch } from 'react-redux'
import { FC, useRef } from 'react'

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    input { flex: 1 };
`
export const TaskEditor : FC = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    const dispatch = useDispatch()
    const addTaskToList = () : void => {
        const text : string = inputRef.current?.value as string
        dispatch(addTask({ text }))
        inputRef.current!.value = ''
    }
    return (
        <Container>
            <InputText ref={inputRef}/>
            <TSquareButton variant='primary' onClick={ () => addTaskToList() }>+</TSquareButton>
        </Container>
    )
}