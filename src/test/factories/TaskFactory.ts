import faker from '../../libs/faker'
import { TaskType } from '../../types/task-type'

export const TaskFactory = () : TaskType => ({
    index: 0,
    text: faker.word.words(4),
    checked: faker.datatype.boolean()
})

export const TaskListFactory = ( amount : number = 10) : Array<TaskType> => {
    const taskList : Array<TaskType> =  Array.from( { length: amount }, () => TaskFactory())
    return taskList.map(
        (task : TaskType, index) => ({
            ...task,
            index,
        })
    )
}
