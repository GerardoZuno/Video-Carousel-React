import React from 'react';
//Encapusula los componentes que necesitamos para trabajar con la ruta
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import NotFound from '../containers/NotFound';
import Register from '../containers/Register';

const App = () => (

    <BrowserRouter>
     <Switch>
     <Route exact path="/" component={Home}/>
     <Route exact path="/Login" component={Login}/>
     <Route exact path="/Register" component={Register}/>
     <Route component={NotFound}/>
     </Switch>
    </BrowserRouter>
)


export default App