import { useSelector, useDispatch } from "react-redux"
import { TaskType } from "../types/task-type"
import { FC, useMemo } from "react"
import { TaskListItem } from "./TaskListItem"
import { toggleCheckedIndicator, deleteTask } from "../features/task/task"
import { TAlert } from "./theme"
import { TagListItemCard } from "./common/TaskListItemCard"

export const DailyScheduleTaskList : FC= () => {
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
    const pendingTasks : Array<TaskType> = useMemo(
        () => taskList.filter( (task : TaskType) => task.checked === false ),
        [taskList]
    )

    return (
        <div>
                { 
                    pendingTasks.length
                    ? pendingTasks
                    .map((task : TaskType) => (
                        <TagListItemCard>
                            <TaskListItem task={task} taskHandler={taskHandler(task.index)} key={task.index}/>
                        </TagListItemCard>
                    ))
                    : (<TAlert>Não há tarefas pendentes no momento</TAlert>)
                }
        </div>
    )
}
