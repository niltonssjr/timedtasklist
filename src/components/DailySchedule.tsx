import { DailyScheduleTaskList } from "./DailyScheduleTaskList"
import { THeader2 } from "./theme-components"
import { ScrollableContainer } from "./common-components/ScrollableContainer"
import { VerticalContainerWithTitle } from "./common-components/VerticalContainerWithTitle"

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
