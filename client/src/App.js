import Aside from './components/Aside/Aside';
import Sidebar from './components/Sidebar/Sidebar';
import "./app.css";
import background from "./assets/img/pika.png";

function App() {

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <section className="wrapper">
        <Sidebar />
        <Aside />
      </section>
    </div>
  );
}

export default App;
