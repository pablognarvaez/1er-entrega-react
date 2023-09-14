import logo from './logo.svg';
import NavBar from './componentes/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  function sumar (){

  }


  return (
    <div>
      <NavBar texto='soy un texto' numero={1} valor={true} sumar={sumar} />
    </div>
  );
}

export default App;
