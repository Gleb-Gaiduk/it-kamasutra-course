import './App.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProfileCard from "../ProfileCard/ProfileCard";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import { Route } from "react-router-dom";
import Dialogs from "../Dialogs/Dialogs";

const App = ({ state, dispatch }) => {
  return (
      <div className='App'>
        <Header />

        <div className='App-container'>
            <ProfileCard parentClassName='App-card' />
            <Navbar parentClassName='App-navbar' />
            <main className='App-content'>
                <Route exact path='/profile'
                        render={() => <Profile profileData={state.profilePage}
                                               dispatch={dispatch} />} />
                <Route exact path='/dialogs'
                       render={() => <Dialogs dialogsData={state.dialogsPage}
                                              dispatch={dispatch} />} />
            </main>
        </div>

        <Footer />
      </div>
  );
}

export default App;
