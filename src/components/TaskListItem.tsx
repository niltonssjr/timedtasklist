import { FC } from 'react'
import styled from 'styled-components'
import { TaskType } from '../types/task-type'
import { InputCheckBox } from './baseComponents/InputCheckBox'
import { TaskListItemText } from './TaskListItemText'
import { DeleteButton } from './baseComponents/DeleteButton'

const TagCard = styled.div`
    box-sizing: border-box;
    width: 98%;
    border-left: 5px solid var(--primary-color);
    padding: 10px;
    font-size: 1rem;
    color: var(--standard-font-color);
    margin: 10px 0px;
    box-shadow: 0px 0px 18px 5px #e8eaed;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: flex-start;
    div:first-child{
        display: flex;
        flex-direction: row;
        gap: 10px;
        justify-content: flex-start;
        align-items: flex-start;
    }
`

interface PropType {
    task: TaskType,
    taskHandler?: ( event: string) => void
}

export const TaskListItem : FC<PropType> = ( {task, taskHandler = () => {}},  ) => {
    const toggleChecked = (checked: boolean) : void => { taskHandler("task:toggle-checked")}
    const deleteItem = () : void => { taskHandler('task:delete')}
    return (
        <TagCard>
            <div>
                <InputCheckBox value={task.checked} onChange={(e) => {
                    toggleChecked(e.target.checked)
                }}/>
                <TaskListItemText text={task.text} checked={task.checked} />
            </div>
            <DeleteButton onDelete={deleteItem} />
        </TagCard>
    )
}