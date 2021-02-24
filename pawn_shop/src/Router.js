import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import App from './App';
import SneekPeek from './SneekPeek/SneekPeek';

const AppRouter = () => {
  return(
    <Router>
      <Switch>
        <Route path="/HolyRelapse"><SneekPeek/></Route>
        <Route path="/PawnShop"><App/></Route>
      </Switch>
    </Router>
  )
}

export default AppRouter;