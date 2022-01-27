import './styles/App.scss';
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Aside from "./components/Aside/Aside";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Main />
      <Aside />
    </div>
  );
}

export default App;
