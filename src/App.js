import { 
  BrowserRouter as Router,
  useRoutes,
} from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import SetupPage from './pages/SetupPage';
import PlayerOrderPage from './pages/PlayerOrderPage';
import ExchangePage from './pages/ExchangePage';
import ResultsPage from './pages/ResultsPage';
import AboutDevPage from './pages/AboutDevPage';

const App = () => {
  let routes = useRoutes([
    {path: "/", element: <HomePage/>},
    {path: "/setup", element: <SetupPage/>},
    {path: "/player-order", element: <PlayerOrderPage/>},
    {path: "/exchange", element: <ExchangePage/>},
    {path: "/results", element: <ResultsPage/>},
    {path: "/about-the-developer", element: <AboutDevPage/>}

  ]);
  return routes;
}

const AppWrapper = () => {
  return (
    <Router>
      <Layout>
         <App/>
      </Layout>
    </Router>
  )
}

export default AppWrapper;
