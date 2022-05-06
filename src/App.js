import './App.css';
import data from './data'
import NavBar from './components/NavBar'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Card item={data[0]} />
      <hr/>
      <Card item={data[1]} />
      <hr/>
      <Card item={data[2]} />
    </div>
  );
}
export default App;
