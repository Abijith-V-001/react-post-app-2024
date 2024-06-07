import logo from './logo.svg';
import './App.css';
import SendPost from './Components/SendPost';
import TrackPost from './Components/TrackPost';
import DeletePost from './Components/DeletePost';

function App() {
  return (
    <div>
      <SendPost/>
      <TrackPost/>
      <DeletePost/>
    </div>
  );
}

export default App;
