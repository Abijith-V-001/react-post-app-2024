import logo from './logo.svg';
import './App.css';
import SendPost from './Components/SendPost';
import TrackPost from './Components/TrackPost';
import DeletePost from './Components/DeletePost';
import ViewPosts from './Components/ViewPosts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SendPost/>}/>
      <Route path='/track' element={<TrackPost/>}/>
      <Route path='/delete' element={<DeletePost/>}/>
      <Route path='/view' element={<ViewPosts/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
