import React from 'react';
import EvaluationPage from './Page/EvaluationPage';
import LoginPage from './Page/LoginPage';
import { Switch, Route } from 'react-router-dom';
import InputPage from './Page/InputPage';

const App: React.FC = () => {
  return (
    <div>
      {/* <Switch>
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/' component={InputPage} />
      </Switch> */}
      <EvaluationPage />
    </div>
  );
}

export default App;
