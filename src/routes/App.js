import React from 'react';
//Encapusula los componentes que necesitamos para trabajar con la ruta
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';

const App = () => (

    <BrowserRouter>
    //switch sirve para solo mostrar el elemento con el que se 
     este haciendo match
     <Switch>
     <Route exact path="/" component={Home}/>
     <Route exact path="/Login" component={Login}/>
     <Route exact path="/Register" component={Register}/>
     </Switch>
    </BrowserRouter>
)


export default App