
import './App.css';
import Effecthook from './components/Effecthook';
import Formhandling from './components/Formhandling';
import Header from './components/Header';
import Input from './components/Input ';
import Mapping from './components/Mapping';

import ProductList from './components/ProductList';
import UpdateState from './components/UpdateState';

function App() {
  return (
    <>
    <Header/>
   <hr/>
    <ProductList/>
    <hr/>
    <Input/>
    <hr/>
    <Mapping/>
    <hr/>
    <Effecthook/>
    <hr/>
    <UpdateState/>
    <hr/>
    <Formhandling/>
    
    
    </>
    
  );
}

export default App;
