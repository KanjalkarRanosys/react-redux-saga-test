import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home';
import AddEditUser from './pages/AddEditUser';
import UserView from './pages/UserView';
import Header from './component/Header';
import GQHome from './pages/GQHome';
import GQUserView from './pages/GQUserView';
import GqAddEditUser from './pages/gqAddEditUser';

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
