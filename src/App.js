import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from './containers/Header';
//import ProductComponent from './containers/ProductComponent';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact  component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetail} />
          <Route>404 Not Found!!</Route>
          <Route/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
