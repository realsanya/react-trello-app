import * as styled from './styles';
import Sidebar from '../Sidebar';
import { Route, Router, Switch } from 'react-router';
import Home from '../Home';
import Dashboard from '../Dashboard';
import Support from '../Support';
import Settings from '../Settings';


const Root = () => {
    return (
        <Router>
                <Sidebar/>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/support" component={Support} /> 
                    <Route path="/settings" component={Settings} />
                </Switch>
        </Router>
    );
};

export default Root;