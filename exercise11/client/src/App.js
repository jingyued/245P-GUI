import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        username:
        <input label="username" id="username" type="text" />
        password:
        <input label="password" id="password-input" type="password" />
        <button id="login-button" type="submit"> submit </button>
      </form>
    </div>
  );
}

export default App;
