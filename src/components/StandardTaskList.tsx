import { TaskEditor } from "./TaskEditor"
import { TaskList } from "./TaskList"
import { THeader2 } from "./theme-components"
import { ScrollableContainer } from "./common-components/ScrollableContainer"
import { VerticalContainerWithTitle } from "./common-components/VerticalContainerWithTitle"

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
