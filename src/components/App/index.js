import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Container from '../Container';

const App = (props) => {
  console.log(props);
  return (
    <BrowserRouter>
      <Provider store={props.store} >
        <Container />
      </Provider>
    </BrowserRouter>
  );
}

export default App;