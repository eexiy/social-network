import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './common/Preloader/Preloader';

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {

    if (!this.props.initialized) return <Preloader /> 

    return (
      <div className='app__wrapper'>
        <HeaderContainer />
        <Sidebar />
        <div className='app__wrapper-content'>
          <Routes>
            <Route path="/profile/*" element={<ProfileContainer />} />
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path='/messages/*' element={<DialogsContainer />} />
            <Route path='/users/*' element={<UsersContainer />} />
            <Route path='/login/*' element={<Login />} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default connect(mapStateToProps, { initializeApp })(App);
