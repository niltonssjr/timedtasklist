import { TaskEditor } from "./TaskEditor"
import { TaskList } from "./TaskList"
import { THeader2 } from "./theme"
import { ScrollableContainer } from "./common/ScrollableContainer"
import { VerticalContainerWithTitle } from "./common/VerticalContainerWithTitle"

export const StandardTaskList = () => {
    return (
        <VerticalContainerWithTitle>
            <THeader2>Tarefas</THeader2>
            <TaskEditor />
            <ScrollableContainer>
                <TaskList/>
            </ScrollableContainer>        
        </VerticalContainerWithTitle>
    )
}
