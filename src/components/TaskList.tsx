import { useSelector, useDispatch } from "react-redux"
import { TaskType } from "../types/task-type"
import { FC, useMemo } from "react"
import { TaskListItem } from "./TaskListItem"
import {     
    toggleCheckedIndicator,
    deleteTask
} from "../features/task/task"
import { TAlert } from "./theme-components"

export const TaskList : FC= () => {
    const taskFeature = useSelector((state: any) => state.task.value)
    const {taskList} = taskFeature

    const dispatch = useDispatch()

    const taskHandler = (index: number) => (eventName : string) : void =>  {
        switch(eventName){
            case "task:toggle-checked":
                dispatch(toggleCheckedIndicator({index}))
                break;
            case "task:delete":
                dispatch(deleteTask({index}))
                break;
            default:
        }
    }

    const generateKey = (task: TaskType) : string => `${task.checked ? '1' : '0'}-${String(task.index).padStart(5,"0")}`
    const orderedTaskList : Array<TaskType> = useMemo(
        () => [...taskList].sort(
            (firstElement, secondElement) => {                
                return generateKey(firstElement).localeCompare(generateKey(secondElement))
            }
        ),
        [taskList]
    )

    return (
        <div>
            { 
                taskList.length
                ? orderedTaskList.map((task : TaskType) => (<TaskListItem task={task} taskHandler={taskHandler(task.index)} key={task.index}/>))
                : (<TAlert>Não há tarefas cadastradas.</TAlert>)
            }
        </div>
    )
}
