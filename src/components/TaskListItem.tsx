import { FC } from 'react'
import styled from 'styled-components'
import { TaskType } from '../types/task-type'
import { 
    TDeleteButton,
    TInputCheckBox 
} from './theme'
import { TaskListItemText } from './TaskListItemText'

const TagCard = styled.div`
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
                <TInputCheckBox value={task.checked} onChange={(e) => {
                    toggleChecked(e.target.checked)
                }}/>
                <TaskListItemText text={task.text} checked={task.checked} />
            </div>
            <TDeleteButton onDelete={deleteItem} />
        </TagCard>
    )
}
