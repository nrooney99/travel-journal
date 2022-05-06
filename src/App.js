import './App.css';
import data from './data'
import NavBar from './components/NavBar'
import Card from './components/Card'

function App() {
  return (
    <div>
    <div className="App">
      <NavBar />
      <Card item={data[0]} />
      <hr/>
      <Card item={data[1]} />
      <hr/>
      <Card item={data[2]} />
    </div>
    <a href='https://www.linkedin.com/in/nicol%C3%A1s-rooney-803b4815b/'><footer>By Nicolás Rooney</footer></a>
    </div>
  );
}
export default App;
