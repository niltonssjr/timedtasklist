import { TaskType } from "../types/task-type"
import { FC, useMemo } from "react"
import { TaskListItem } from "./TaskListItem"
import { TAlert } from "./theme"
import { TagListItemCard } from "./common/TaskListItemCard"
import { useTask } from "../hooks/use-task"

export const DailyScheduleTaskList : FC= () => {

    const { taskHandler, taskList } = useTask()

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
