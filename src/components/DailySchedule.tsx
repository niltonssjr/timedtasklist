import { DailyScheduleTaskList } from "./DailyScheduleTaskList"
import { Header2 } from "./baseComponents"
import { ScrollableContainer } from "./baseComponents/ScrollableContainer"
import { VerticalContainerWithTitle } from "./baseComponents/VerticalContainerWithTitle"

export const DailySchedule = () => {
    return (
        <VerticalContainerWithTitle>
            <Header2>Agenda do dia</Header2>
            <ScrollableContainer>
                <DailyScheduleTaskList/>
            </ScrollableContainer>             
        </VerticalContainerWithTitle>
    )
}