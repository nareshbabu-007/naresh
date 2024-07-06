import './App.css';
import LoginForm from './login.js';
import SignUp from './signup.js';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      
        <LoginForm></LoginForm>
        <SignUp></SignUp>
      </header>
    </div>
  );
}

export default App;


