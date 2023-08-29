import { createSlice } from '@reduxjs/toolkit'
import { TaskType } from '../../types/task-type'
import { TaskListFactory } from '../../test/factories/TaskFactory'

const emptyTask : TaskType = {
    index: 0,
    text: '',
    checked: false
}

const initialState : Record<string, any> = {
    taskList: []
}

const getMaxTaskIndex = (taskList : Array<TaskType>) : number => {
    if (!taskList.length) return 0
    return taskList.reduce(
        (max: number, item: TaskType) => item.index > max ? item.index : max,
        0
    )
}

const findIndexOnList = (taskList : Array<TaskType>, index : number) => taskList.findIndex( (task: TaskType) => Number(task.index) === Number(index))

export const taskSlice = createSlice({
    name: 'task',
    initialState: { value: initialState},
    reducers: {
        generateFakeTasks(state){
            state.value.taskList = TaskListFactory(20)
        },
        toggleCheckedIndicator(state, { payload : { index } }) : any {
            const taskIndexOnList = findIndexOnList(state.value.taskList, index)
            const task : TaskType = state.value.taskList[taskIndexOnList]
            task.checked = !task.checked
            return state
        },
        addTask(state, { payload }) : any {
            const { text } = payload
            if (text.trim().length){
                const nextIndex : number = getMaxTaskIndex(state.value.taskList) + 1
                state.value.taskList.push({
                    ...emptyTask,
                    index: nextIndex,
                    text: text.trim(),
                })
            }
            return state
        },
        deleteTask(state, { payload: { index }}) : any {
            const taskIndexOnList = findIndexOnList(state.value.taskList, index)
            state.value.taskList.splice(taskIndexOnList, 1)
            return state
        }
    }
})

export const { 
    generateFakeTasks, 
    toggleCheckedIndicator,
    addTask ,
    deleteTask,
} =taskSlice.actions
export default taskSlice.reducer
