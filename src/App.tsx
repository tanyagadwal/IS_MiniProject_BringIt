import { BrowserRouter } from "react-router-dom";
import AppWithRouting from "./Routes";
// import Checkout from "./components/Checkout";

function App() {
  return (
    <BrowserRouter>
      <AppWithRouting />
    </BrowserRouter>
  );
}

export default App;
