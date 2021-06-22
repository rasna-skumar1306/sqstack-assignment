import "./App.css";
import NoInternet from "./OfflineStatus";
import { Offline, Online } from "react-detect-offline";

import SimpleTabs from "./Tabs";

function App() {
  return (
    <div className="App">
      <Online>
        <SimpleTabs />
      </Online>
      <Offline>
        <NoInternet />
      </Offline>
    </div>
  );
}

export default App;
