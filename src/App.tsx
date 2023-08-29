import { DailySchedule } from "./components/DailySchedule";
import { MainContainer } from "./components/MainContainer";
import { StandardTaskList } from "./components/StandardTaskList";

function App() {  
  return (
    <div className="App">
        <MainContainer>
          <DailySchedule/>
          <StandardTaskList />
        </MainContainer>
    </div>
  );
}

export default App;
