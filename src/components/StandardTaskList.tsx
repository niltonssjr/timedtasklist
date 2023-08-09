import { TaskEditor } from "./TaskEditor"
import { TaskList } from "./TaskList"
import { Header2 } from "./baseComponents"
import { ScrollableContainer } from "./baseComponents/ScrollableContainer"
import { VerticalContainerWithTitle } from "./baseComponents/VerticalContainerWithTitle"

export const StandardTaskList = () => {
    return (
        <VerticalContainerWithTitle>
            <Header2>Tarefas</Header2>
            <TaskEditor />
            <ScrollableContainer>
                <TaskList/>
            </ScrollableContainer>        
        </VerticalContainerWithTitle>
    )
}