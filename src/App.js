import './App.css';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import ProfileOverview from './Pages/ProfileOverview/ProfileOverview';
import Profile from './Pages/Porfile/profile';
import PublicProfile from './Pages/PublicProfile/PublicProfile';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profileOverview" element={<ProfileOverview />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/publicprofile" element={<PublicProfile />} />
      </Routes>
    </div>
  );
}

export default App;
