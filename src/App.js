import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app__wrapper'>
        <HeaderContainer />
        <Sidebar />
        <div className='app__wrapper-content'>
          <Routes>
            <Route path='/profile/:userId/*' element={<ProfileContainer />} />
              {/* <Route path=":userId/*" element={<ProfileContainer />} />
            <Route /> */}

            <Route path='/messages/*' element={
              <DialogsContainer />} />

            <Route path='/users/*' element={
              <UsersContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
