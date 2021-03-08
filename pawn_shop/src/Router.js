import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import PawnShop from './components/PawnShop/PawnShop';
import SneekPeek from './SneekPeek/SneekPeek';
import Souls from './components/PawnShop/Souls/Souls';
import PageNameContext from './PageNameContext';
import ScrollToTop from './ScrollToTop';

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
      <>
      <ScrollToTop />
      <Switch>
        <Route path="/Souls"><Souls/></Route>
        <Route path="/HolyRelapse"><SneekPeek/></Route>
        <Route path="/PawnShop"><PawnShop/></Route>
      </Switch>
      </>
    </Router>
    </PageNameContext.Provider>
  )
}

export default AppRouter;