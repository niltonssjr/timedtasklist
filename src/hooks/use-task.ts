import { useDispatch, useSelector } from "react-redux";
import { toggleCheckedIndicator, deleteTask } from '../features/task/task'

export function useTask(){
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
    
    return {
        taskHandler,
        taskList
    }
}