import './App.css';
import Chat from './Chat/Chat';
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <div className="app_body">
        <h1>lets build</h1>
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  );
}

export default App;
