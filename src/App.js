import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"

import Landing from './pages/Landing';
import Feed from './pages/Feed';
import EditProfile from './pages/EditProfile'
import CreatePost from './pages/CreatePost';
import Profile from './pages/Profile';
import Explore from './pages/Explore';
import MessagesMain from './pages/MessagesMain';

function App() {
  return (
    <div className='App'>
      <Router>
      <Routes>
        <Route exact path="/" element={ <Landing /> } />
        <Route exact path="/edit-profile" element={ <EditProfile /> } />
        <Route exact path="/create-post" element={ <CreatePost /> } />
        <Route exact path="/profile" element={ <Profile /> } />
        <Route exact path="/explore" element={ <Explore /> } />
        <Route exact path="/messages" element={ <MessagesMain /> } />
        <Route exact path="/feed" element={ <Feed /> } />
      </Routes>
      </Router>
    </div>
  );
}

export default App;