import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home.js';
import AddEditUser from './pages/AddEditUser.js';
import UserView from './pages/UserView.js';
import Header from './component/Header.js';
import GQHome from './pages/GQHome.js';
import GQUserView from './pages/GQUserView.js';
import GqAddEditUser from './pages/gqAddEditUser.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/addUser" element={<AddEditUser />} />
            <Route path="/editUser/:id" element={<AddEditUser />} />
            <Route path="/userView/:id" element={<UserView />} />
            <Route exact path="/gq-home" element={<GQHome />} />
            <Route path="/gquserView/:id" element={<GQUserView />} />
            <Route path="/gqAddUser" element={<GqAddEditUser />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
