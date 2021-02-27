import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import PawnShop from './components/PawnShop/PawnShop';
import SneekPeek from './SneekPeek/SneekPeek';
import PageNameContext from './PageNameContext';

import {useState} from 'react';

const AppRouter = () => {

  const [pageName, setPageName] = useState('PawnShop');
  const handlePageNameChange = (name) => {
    setPageName(name);
  }

  return(
    <PageNameContext.Provider
      value={{pageName, handlePageNameChange}}
    >
    <Router>
      <Switch>
        <Route path="/HolyRelapse"><SneekPeek/></Route>
        <Route path="/PawnShop"><PawnShop/></Route>
      </Switch>
    </Router>
    </PageNameContext.Provider>
  )
}

export default AppRouter;