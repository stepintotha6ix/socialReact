import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import News from './components/news/News';
import Music from './components/music/Music';
import Login from './components/login/login' ;
import { Route, withRouter, BrowserRouter } from 'react-router-dom';
import UsersContainer from './components/users/UsersContainer';
import HeaderContainer from './components/header/HeaderContainer';
import { Component } from 'react';
import { compose } from 'redux';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/app-reducer'
import Loader from './components/command/loader/loader';
import store from './redux/redux-store';


const DialogsContainer = React.lazy(() => import('./components/dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/profile/ProfileContainer'))




class App extends Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Loader />
        }
        <Loader />
        return (<div>
            <HeaderContainer />
            <div className='app-wrapper' >

                <Navbar
                //state={props.state.sidebar}
                />
                <div className='app-wrapper-content'>
                    <Suspense fallback={<Loader />}>
                        <Route path='/dialogs' render={() => <DialogsContainer />} />
                        <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                    </Suspense >
                    <Route path='/users' render={() => <UsersContainer pageTitle={'Users'}/>} />
                    <Route path='/news' render={() => <News />} />
                    <Route path='/music' render={() => <Music />} />
                    <Route path='/login' render={() => <Login />} />

                </div>
            </div>
        </div>
        );
    }
}


const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App)

const ReactJsApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}
export default ReactJsApp