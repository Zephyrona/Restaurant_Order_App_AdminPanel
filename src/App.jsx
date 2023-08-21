import "./App.css";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div className="flex flex-row gap-[0]">
      <div className="w-[20%]">
        <Sidebar />
      </div>
      <div className="w-[75%]"></div>
    </div>
  );
}

export default App;
