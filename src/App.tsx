import Header from './components/Header';
import SideNavigation from './components/SideNavigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BrandsPage from './components/BrandsPage';
import Home from './components/Home';
import StoresPage from './components/StoresPage';
import PromosPage from './components/PromosPage';
;
const App = () => {
  return (
    <Router>
      <SideNavigation />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/brands">
          <BrandsPage /> 
        </Route>
        <Route path="/stores">
          <StoresPage /> 
        </Route>
        <Route path="/promos">
          <PromosPage /> 
        </Route>
      </Switch>
    </Router>
  )
}
export default App;
