import './App.css';
//import HeaderFirstScreen from './HeaderFirstScreen';
import MainMenu from './components/MainMenu';
//import HeaderCloseScreen from './components/HeaderCloseScreen';
import NavState from './context/navState';

function App() {
  return(
    <header>
      <NavState>
        <MainMenu />
      </NavState>
    </header>
  );

}

export default App;
