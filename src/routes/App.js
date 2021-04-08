import React from 'react';
//Encapusula los componentes que necesitamos para trabajar con la ruta
import { BrowserRouter, Route} from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';

const App = () => (
    <BrowserRouter>
     <Route exact path="/" component={Home}/>
     <Route exact path="/Login" component={Login}/>
    </BrowserRouter>
)


export default App