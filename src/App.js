import './App.css';
import useInput from './hooks/useInput';
import Hover from './components/Hover';
import List from './components/List';
import { useRef } from 'react';
import Search from './components/Search';
import ListRequest from './components/ListRequest';

function App() {
  const userName = useInput('')
  const password = useInput('')



  return (
    <div className="App">
      <ListRequest />

      <Search />

      <List />

      <Hover />

      <input {...userName} type="text" placeholder='username' />
      <input {...password} type="text" placeholder='password' />
      <button onClick={() => console.log(userName.value, password.value)}>Click</button>
    </div>
  );
}

export default App;
