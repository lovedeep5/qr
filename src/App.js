import "./App.css";
import Form from "./Components/Form";
import AppContextProvider from "./features/appContext";

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <Form />
      </div>
    </AppContextProvider>
  );
}

export default App;
