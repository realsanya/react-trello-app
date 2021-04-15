import { BrowserRouter, Route } from 'react-router-dom';
import Main from '../Main';
import Login from '../Login';
import Register from '../Register';


function App() {
  return (
    <BrowserRouter>
      {/* <Main /> */}
      <Route path="/main" component={Main} />
      <Route path="/signIn" component={Login} />
      <Route path="/signUp" component={Register} />
    </BrowserRouter>
  );
}

export default App;