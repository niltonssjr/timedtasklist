import { DailyScheduleTaskList } from "./DailyScheduleTaskList"
import { THeader2 } from "./theme"
import { ScrollableContainer } from "./common/ScrollableContainer"
import { VerticalContainerWithTitle } from "./common/VerticalContainerWithTitle"

export const DailySchedule = () => {
    return (
        <VerticalContainerWithTitle>
            <THeader2>Agenda do dia</THeader2>
            <ScrollableContainer>
                <DailyScheduleTaskList/>
            </ScrollableContainer>             
        </VerticalContainerWithTitle>
    )
}
