import { TaskType } from "../types/task-type"
import { FC, useMemo } from "react"
import { TaskListItem } from "./TaskListItem"
import { TAlert } from "./theme"
import { TagListItemCard } from "./common/TaskListItemCard"
import { useTask } from "../hooks/use-task"

export const TaskList : FC= () => {
    const { taskHandler, taskList } = useTask()

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
                ? orderedTaskList.map((task : TaskType) => (
                    <TagListItemCard>
                        <TaskListItem task={task} taskHandler={taskHandler(task.index)} key={task.index}/>
                    </TagListItemCard>
                ))
                : (<TAlert>Não há tarefas cadastradas.</TAlert>)
                
            }
        </div>
    )
}
