import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app__wrapper'>
        <Header />
        <Sidebar />
        <div className='app__wrapper-content'>
          <Routes>
            <Route path='/profile/*' element={<Profile state={props.state.profilePage} addPost={props.addPost} />} />
            <Route path='/messages/*' element={<Dialogs state={props.state.dialogsPage} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
