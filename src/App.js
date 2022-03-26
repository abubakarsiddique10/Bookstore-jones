import logo from './logo.svg';
import './App.css';
import Shop from './components/Shop/Shop';
import Header from './components/Header/Header';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <h1 className='mb-5'></h1>
    </div>
  );
}

export default App;
