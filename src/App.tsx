import { DailySchedule } from "./components/DailySchedule";
import { MainContainer } from "./components/MainContainer";
import { StandardTaskList } from "./components/StandardTaskList";

function App() {  
  return (
    <div className="App">
        <MainContainer leftPane={DailySchedule} rightPane={StandardTaskList} />
    </div>
  );
}

export default App;
