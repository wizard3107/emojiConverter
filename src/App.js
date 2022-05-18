import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import Input from './components/Input';
import styles from './components/css/input.module.css'
function App() {
  return (
    <div className="App">
     <div className={styles.mainContainer}>
      <Input/>
      <Posts/>
     </div>
    </div>
  );
}

export default App;
