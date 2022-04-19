import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home';
import AddEditUser from './pages/AddEditUser';
import UserView from './pages/UserView';
import Header from './component/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addUser" element={<AddEditUser />} />
            <Route path="/editUser/:id" element={<AddEditUser />} />
            <Route path="/userView/:id" element={<UserView />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;



// import './App.css';
// import {BrowserRouter, Route, Switch} from "react-router-dom"
// import Home from './pages/Home';
// import AddEditUser from './pages/AddEditUser';

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/addUser" component={AddEditUser} />
//           <Route path="/editUser/:id" component={AddEditUser} />
//         </Switch>
//     </div>
//     </BrowserRouter>
//   );
// }

// export default App;
