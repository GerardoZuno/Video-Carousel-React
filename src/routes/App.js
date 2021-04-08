import React from 'react';
//Encapusula los componentes que necesitamos para trabajar con la ruta
import { BrowserRouter, Route} from 'react-router-dom';
import Home from '../containers/Home';

const App = () => (
    <BrowserRouter>
     <Route exact path="/" component={Home}/>
    </BrowserRouter>
)


export default App